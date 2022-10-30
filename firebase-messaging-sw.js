importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyBmgbwC9ENA61nHYi4qPGH_iYeN1G2SwRA",
    authDomain: "lawnotification-b8831.firebaseapp.com",
    projectId: "lawnotification-b8831",
    storageBucket: "lawnotification-b8831.appspot.com",
    messagingSenderId: "448386869639",
    appId: "1:448386869639:web:d3a6a49c1cb57fd0a04b22"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});