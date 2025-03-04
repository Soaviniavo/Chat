// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore ,collection} from 'firebase/firestore' ;  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb3q1nhF4bGFQpa7pgZPpTe7m3aCLlaaQ",
  authDomain: "fir-chat-f1d3a.firebaseapp.com",
  projectId: "fir-chat-f1d3a",
  storageBucket: "fir-chat-f1d3a.firebasestorage.app",
  messagingSenderId: "630926260897",
  appId: "1:630926260897:web:3e0f0396ad3d214be80ee0"
};  

// Initialize Firebase 
const app = getApps().length ? getApp() :  initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app);
export const usersRef = collection(db,'users');
export const roomsRef = collection(db,'rooms'); 