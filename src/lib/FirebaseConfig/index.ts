// @ts-ignore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// @ts-ignore
import{getStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";
import {FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESS_ID, FIREBASE_APP_ID, FIREBASE_MEASURE_ID} from "$env/static/private";

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESS_ID,
    appId: FIREBASE_APP_ID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage=getStorage(app);

export { projectStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject}
