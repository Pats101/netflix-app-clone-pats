import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBqx3YcJreGMfu60hhwVxLoCApdXPYj6t0",
    authDomain: "netflix-9676f.firebaseapp.com",
    projectId: "netflix-9676f",
    storageBucket: "netflix-9676f.appspot.com",
    messagingSenderId: "192714025610",
    appId: "1:192714025610:web:f378fc3f9b4edad28f5b73",
    measurementId: "G-003JXHQ01L",
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);