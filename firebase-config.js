// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCstDdbOAisSEZzu9FT9Zyzl_pj5-RHBnA",
  authDomain: "guidance-appointment.firebaseapp.com",
  databaseURL: "https://guidance-appointment-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "guidance-appointment",
  storageBucket: "guidance-appointment.firebasestorage.app",
  messagingSenderId: "280009961139",
  appId: "1:280009961139:web:f0863f2e5940be5e534ac6",
  measurementId: "G-2MCGGLRTML"
};

export const app = initializeApp(firebaseConfig);
