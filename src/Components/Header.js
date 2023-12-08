import { Logout, Notifications, Person2 } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const Header = () => {
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full bg-[#55D6C2]">
      <header className="flex justify-between items-center px-4 lg:px-8 md:px-6 py-2 lg:py-4 md:py-4">
        <h1 className="font-bold text-xl ">Helpdesk</h1>
        <div className="flex flex-row items-center gap-2 lg:gap-4">
          <div className="flex flex-row items-center border-2 rounded-md border-r-4 font-semibold text-sm border-black h-fit w-fit">
            <div className="px-1 bg-black text-white">BM</div>
            <div className="px-1">BI</div>
          </div>
          <Notifications />
          <button>
            <Person2 />
          </button>
          <button onClick={signOutUser}>
            <Logout />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
