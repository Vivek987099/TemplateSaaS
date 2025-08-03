import { NavLink } from "react-router";
import { GlobalContext } from "../context/GlobalContext";
import Button from "./Button";
import NoBgButton from "./NoBgButton";
import { IoMenuOutline } from "react-icons/io5";

import CanvasMenu from "./CanvasMenu";
import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";

function Header() {
  let [toggle, setToggle] = useState(false);

  return (
    <>
      {/* HEADER OF THE WEBSITE */}
      <header className="font-moonDance py-5">
        <div className="my-container  flex justify-between items-center">
          {/* HEADER LOGO  */}
          <div>
            <img
              className="h-8 lg:h-13 cursor-pointer"
              src="/public/logo.svg"
              alt="logo"
            />
          </div>
          {/* HEADER NAVIGATION  AND BUTTONS */}

          <div className="hidden lg:block">
            <ul className="text-Nav flex gap-x-7">
              <li>
                <NavLink className="hover:text-[#4a6cf7]">Home</NavLink>
              </li>
              <li>
                <NavLink className="hover:text-[#4a6cf7]">Feature</NavLink>
              </li>
              <li>
                <NavLink className="hover:text-[#4a6cf7]">Pricing</NavLink>
              </li>
              <li>
                <NavLink className="hover:text-[#4a6cf7]">Tesimonial</NavLink>
              </li>
              <li>
                <NavLink className="hover:text-[#4a6cf7]">FAQ</NavLink>
              </li>
            </ul>
          </div>
          {/* HEADER LOGIN AND SIGN IN BUTTON*/}
          <div className="flex items-center gap-x-5">
            <div className=" justify-center items-center gap-x-5 hidden md:flex">
              {/* login button */}
              <NoBgButton title="Sign In"></NoBgButton>
              {/* sign in button */}
              <Button title="Sign Up"></Button>
            </div>
            {/* Canvas Menu toggle Button */}
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
              className="py-1.5 px-1.5 rounded lg:hidden "
            >
              {toggle ?<IoCloseOutline  className="text-[30px]"/> : <IoMenuOutline  className="text-[30px]"/> }
            </div>
          </div>
        </div>
        <CanvasMenu toggle={toggle}></CanvasMenu>
      </header>
    </>
  );
}

export default Header;
