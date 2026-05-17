importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);


firebase.initializeApp({

  apiKey: "AIzaSyDZYeHi4eH1UOT1EX6XX6GMehaZ9gMn-8U",

  authDomain: "blogcraft-d49fc.firebaseapp.com",

  projectId: "blogcraft-d49fc",

  storageBucket: "blogcraft-d49fc.appspot.com",

  messagingSenderId: "64181266980",

  appId: "1:64181266980:web:21391ee47fc623dfdc06b1",
});


const messaging = firebase.messaging();


messaging.onBackgroundMessage(
  (payload) => {

    console.log(
      "Background Message:",
      payload
    );

    self.registration.showNotification(
      payload.notification.title,
      {
        body:
          payload.notification.body,

        icon: "/logo192.png",
      }
    );
  }
);