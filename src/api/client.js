const BASE_URL = "http://localhost:8000";

const getAccessToken = () => sessionStorage.getItem("access_token");
const getRefreshToken = () => sessionStorage.getItem("refresh_token");

export const setTokens = (access, refresh) => {
  sessionStorage.setItem("access_token", access);
  sessionStorage.setItem("refresh_token", refresh);
};

export const clearTokens = () => {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("refresh_token");
};


let isRefreshing = false;
let refreshPromise = null;


const refreshAccessToken = async () => {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      const refresh_token = getRefreshToken();

      if (!refresh_token) {
        throw new Error("No refresh token found");
      }

      const response = await fetch(`${BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${refresh_token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.detail || "Session expired");
      }

      sessionStorage.setItem("access_token", data.access_token);
      return data.access_token;
    })();

    try {
      return await refreshPromise;
    } finally {
      refreshPromise = null;
    }
  }

  return refreshPromise;
};


export const apiRequest = async (endpoint, options = {}) => {
  let access_token = getAccessToken();

  const makeRequest = async (token) => {
    return fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(options.headers || {}),
      },
    });
  };

  let response = await makeRequest(access_token);

  if (response.status === 401) {
    let errorData = null;

    try {
      errorData = await response.clone().json();
    } catch {}

    if (errorData?.detail === "TOKEN_EXPIRED") {
      try {
        const newAccessToken = await refreshAccessToken();

        response = await makeRequest(newAccessToken);
      } catch (error) {
        clearTokens();
        window.location.href = "/welcome";
        throw error;
      }
    } else {
      clearTokens();
      window.location.href = "/welcome";

      throw new Error(errorData?.detail || "Unauthorized");
    }
  }


  let data = null;
  try {
    data = await response.json();
  } catch {}

  if (!response.ok) {
    throw new Error(data?.detail || "Something went wrong");
  }

  return data;
};