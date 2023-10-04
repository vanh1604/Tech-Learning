// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAwGJnWtnKwq-gXGECff6xEs-YfVzdvDvY",
	authDomain: "tech-learning-5e902.firebaseapp.com",
	projectId: "tech-learning-5e902",
	storageBucket: "tech-learning-5e902.appspot.com",
	messagingSenderId: "328764978704",
	appId: "1:328764978704:web:91ff14a42ff988f3bd3c95",
	measurementId: "G-75PTXQQBXE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
