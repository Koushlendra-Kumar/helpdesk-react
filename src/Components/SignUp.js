import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, username);
        setErrorMsg("");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(`${errorCode} ${errorMessage}`);
      });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#55D6C2]">
      <div className="flex px-8 lg:px-12 flex-col justify-center items-center bg-[#efeded80]">
        <h1 className="text-black mt-12 text-center text-2xl font-sans italic leading-normal font-bold">
          Helpdesk System
        </h1>
        <form className="flex flex-col justify-center gap-4 pt-4 items-center">
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            className="border border-black px-2"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-black px-2"
          />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-black px-2"
          />
          <div className="text-red-500">{errorMsg}</div>
          <button
            type="button"
            onClick={signUpUser}
            className="bg-[#02CC17] text-white px-10 rounded-lg py-1"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between items-center w-full mt-8 mb-12">
          <p>Already Have an account?</p>
          <Link
            to="/login"
            className="border-2 ml-2 border-[#02CC17] px-5 rounded-lg "
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
