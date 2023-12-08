import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("signed in");
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-black px-2"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-black px-2"
          />
          <div className="text-red-500">{errorMsg}</div>
          <button
            type="button"
            onClick={signInUser}
            className="bg-[#02CC17] text-white px-10 rounded-lg py-1"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between items-center w-full mt-8 mb-12">
          <Link to="/forgotPass" className="text-red-600">
            Forgot password?
          </Link>
          <Link
            to="/signup"
            className="border-2 ml-2 border-[#02CC17] px-5 rounded-lg "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
