import "./header.css";
import CustomButton from "../Custom UI Elements/Button/CustomButton";
import firebase from "../../firebase";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const HeaderView = () => {
	const [signedIn, setSignedIn] = useState(false);

	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			setSignedIn(true);
		} else {
			setSignedIn(false);
		}
	});

	function login() {
		var provider = new firebase.auth.GoogleAuthProvider();

		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				// var credential = result.credential;
				// This gives you a Google Access Token. You can use it to access the Google API.
				// var token = credential.accessToken;
				// // The signed-in user info.
				// var user = result.user;
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				// var errorCode = error.code;
				// var errorMessage = error.message;
				// // The email of the user's account used.
				// var email = error.email;
				// // The firebase.auth.AuthCredential type that was used.
				// var credential = error.credential;
				// ...
			});
	}

	function logout() {
		firebase
			.auth()
			.signOut()
			.then(() => {
				console.log(" Sign-out successful.");
			})
			.catch((error) => {
				console.log("An error happened.");
			});
	}

	return (
		<header>
			<div className="flex-container">
				<div className="leading">
					<h1>The Arsalan Blog</h1>
				</div>
				<div className="middle">
					<Link to="/">Home</Link>
					{signedIn ? <Link to="/create">New Blog</Link> : <></>}
				</div>
				<CustomButton
					title={signedIn ? "Log out" : "Sign in"}
					action={signedIn ? logout : login}
				/>
				<div className="trailing">{}</div>
			</div>
		</header>
	);
};
