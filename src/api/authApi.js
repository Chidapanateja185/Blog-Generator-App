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

export const sendOTP = (email) => {
  return apiRequest(`/auth/otp/send?email=${encodeURIComponent(email)}`, {
    method: "POST",
  });
};

export const verifyOTP = (data) => {
  return apiRequest("/auth/otp/verify", {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      otp: data.otp,
    }),
  });
};

export const resetPassword = (data) => {
  return apiRequest("/auth/password/reset", {
    method: "POST",
    body: JSON.stringify({
      secreat_token: data.secreat_token,
      new_password: data.new_password,
    }),
  });
};