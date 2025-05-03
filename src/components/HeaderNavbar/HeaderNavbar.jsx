import React from "react";
import { Link } from "react-router";
import Avater from "../Avater/Avater";

const HeaderNavbar = ({ className }) => {
  return (
    <nav className={className}>
      <div className="flex items-center">
        <ul className="flex items-center justify-center gap-x-5 w-[80%] text-[#706F6F]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Carrier</Link>
          </li>
        </ul>
        <div className="flex items-center gap-x-5 w-[20%]">
          <Avater width={12} />
          <Link to="/login">
            <button className="inline-block btn btn-secondary text-white w-36 text-md">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
