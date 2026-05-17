import { apiRequest } from "./client";

export const registerUser = (data) => {

  const fcmToken = sessionStorage.getItem("fcm_token");
  
  return apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify({
      first_name: data.fname,
      last_name: data.lname,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
      conform_password: data.confirm,
      fcm_token: fcmToken
    }),
  });
}

export const loginUser = (data) => {
  return apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
}
