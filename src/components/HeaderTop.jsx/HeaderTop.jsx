import React from "react";
import HeaderLogo from "../../assets/logo.png";
import { Link } from "react-router";
import { format } from "date-fns";

const HeaderTop = () => {
  return (
    <div>
      <div className="text-center">
        <Link to="/">
          <img
            className="w-[400px] inline-block"
            src={HeaderLogo}
            alt="Header logo"
          />
        </Link>
      </div>
      <div className="mt-3 text-center">
        <p className="text-[#706F6F]">
          Journalism Without Fear or Favour
        </p>
      </div>
      <div className="mt-3 text-center">
        <p className="text-[#706F6F] font-medium">
          <span className="text-[#403F3F]">
            {format(new Date(), "EEEE, ")}
          </span>
          {format(new Date(), "MMMM dd, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default HeaderTop;
