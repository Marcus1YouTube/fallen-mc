import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNBL-R7StdTM0t5w7RC4CTU_w2MRAIjn4",
  authDomain: "fallen-mc.firebaseapp.com",
  projectId: "fallen-mc",
  storageBucket: "fallen-mc.appspot.com",
  messagingSenderId: "60894106791",
  appId: "1:60894106791:web:b1c95f551549834acf3782",
  measurementId: "G-9P2DK9G6QF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

