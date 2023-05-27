// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ8I0l4yMVubMrYZYIU1HkZohwQP9ncrg",
  authDomain: "movie-app-79842.firebaseapp.com",
  projectId: "movie-app-79842",
  storageBucket: "movie-app-79842.appspot.com",
  messagingSenderId: "143129000685",
  appId: "1:143129000685:web:d16567f6cfa08fb5632ae4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
