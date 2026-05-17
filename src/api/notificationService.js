import {
  requestNotificationPermission,
  onMessageListener
} from "../firebase/firebase";

import { apiRequest } from "./client";

export const initializeNotifications = async () => {

  try {

    const token =
      await requestNotificationPermission();

    if (token) {

      console.log(
        "FCM TOKEN:",
        token
      );

      sessionStorage.setItem(
        "fcm_token",
        token
      );

      const accessToken =
        sessionStorage.getItem(
          "access_token"
        );

      const savedToken =
        sessionStorage.getItem(
          "saved_fcm"
        );

      if (
        accessToken &&
        !savedToken
      ) {

        await apiRequest(
          "/notification/save-token",
          {
            method: "POST",

            body: JSON.stringify({
              fcm_token: token
            }),
          }
        );

        sessionStorage.setItem(
          "saved_fcm",
          "true"
        );

        console.log(
          "FCM Token Saved"
        );
      }
    }

    onMessageListener((payload) => {

      console.log(
        "Foreground Notification:",
        payload
      );

      if (
        Notification.permission === "granted"
      ) {

        navigator.serviceWorker.ready.then(
          (registration) => {

            registration.showNotification(
              payload.notification.title,
              {
                body:
                  payload.notification.body,

                icon:
                  "/logo192.png",

                badge:
                  "/logo192.png",

                vibrate: [
                  200,
                  100,
                  200
                ],

                requireInteraction: true,
              }
            );
          }
        );
      }
    });

  } catch (error) {

    console.log(
      "Notification Service Error:",
      error
    );
  }
};