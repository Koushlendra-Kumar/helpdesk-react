import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#55D6C2]">
      <div className="flex px-8 lg:px-12 flex-col justify-center items-center bg-[#efeded80]">
        <h1 className="text-black mt-12 text-center text-2xl font-sans italic leading-normal font-bold">
          Helpdesk System
        </h1>
        <p className="text-center font-normal text-sm py-4">
          Don’t worry, Enter your email below and we will send you a link to
          change password.
        </p>
        <form className="flex flex-col justify-center gap-4 pt-4 items-center">
          <input
            type="email"
            placeholder="Email"
            className="border border-black px-2"
          />
          <button
            type="submit"
            className="bg-[#02CC17] text-white px-10 rounded-lg py-1"
          >
            Get OTP
          </button>
        </form>
        <div className="flex justify-center items-center w-full mt-8 mb-12">
          <Link
            to="/login"
            className="bg-[#0769DC] text-white px-10 py-1 rounded-lg "
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
