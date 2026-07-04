// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCzsIUyVHahuMRr7On_RXhp_gBFSmExto",
  authDomain: "aimasyo.firebaseapp.com",
  databaseURL: "https://aimasyo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aimasyo",
  storageBucket: "aimasyo.firebasestorage.app",
  messagingSenderId: "539444604870",
  appId: "1:539444604870:web:3b5106568be5e1719e4cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//   git add index.html
//   git commit -m "mobile-first layout: compact headers, bottom-sheet modal, full-width notif panel, active nav dots"
//   git push