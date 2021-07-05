import React, { useState, useRef } from "react";

// firebase
import { auth } from "../firebase";

// css
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        alert("signup successful :) ");
      })
      .catch((error) => alert(error.message));

    // cleaning input box
    emailRef.current.value("");
    passwordRef.current.value("");
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert("signIn successful :) ");
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => alert("signIn successful :)"))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} placeholder="Email" />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__grey">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.{" "}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
