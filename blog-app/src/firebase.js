import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase-auth";
import "firebaseui";

const firebaseConfig = {
	apiKey: "AIzaSyCX9T5ll0bp9pW7rHEpGq3SyaY1kjMBY1E",
	authDomain: "blogprojectid.firebaseapp.com",
	projectId: "blogprojectid",
	storageBucket: "blogprojectid.appspot.com",
	messagingSenderId: "766350543756",
	appId: "1:766350543756:web:56aa3f8b19c18c9ea2a4a9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
