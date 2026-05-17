import { initializeApp } from "firebase/app";

import {
  getMessaging,
  getToken,
  onMessage
} from "firebase/messaging";

const firebaseConfig = {

  apiKey:
    "AIzaSyDZYeHi4eH1UOT1EX6XX6GMehaZ9gMn-8U",

  authDomain:
    "blogcraft-d49fc.firebaseapp.com",

  projectId:
    "blogcraft-d49fc",

  storageBucket:
    "blogcraft-d49fc.appspot.com",

  messagingSenderId:
    "64181266980",

  appId:
    "1:64181266980:web:21391ee47fc623dfdc06b1",

  measurementId:
    "G-N6TEZZ11B5"
};

const app = initializeApp(firebaseConfig);

export const messaging =
  getMessaging(app);

export const requestNotificationPermission =
  async () => {

    try {

      const permission =
        await Notification.requestPermission();

      if (permission !== "granted") {

        console.log(
          "Notification permission denied"
        );

        return null;
      }

      const registration =
        await navigator.serviceWorker.register(
          "/firebase-messaging-sw.js"
        );

      await navigator.serviceWorker.ready;

      const token =
        await getToken(
          messaging,
          {
            vapidKey:
              "BDahvnQwJ12P90Iftv4ELiqbQUq72kOQiyNq2nusw4kqDaU7TxDdGArsS8uiyw-Fa0HuG79OrEExC7I_9_u4hHA",

            serviceWorkerRegistration:
              registration
          }
        );

      console.log(
        "FCM TOKEN:",
        token
      );

      return token;

    } catch (error) {

      console.log(
        "FCM ERROR:",
        error
      );

      return null;
    }
  };

export const onMessageListener =
  (callback) => {

    onMessage(
      messaging,
      (payload) => {

        console.log(
          "Foreground Message:",
          payload
        );

        callback(payload);
      }
    );
  };