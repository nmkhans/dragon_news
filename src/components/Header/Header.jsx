import React from "react";
import HeaderTop from "../HeaderTop.jsx/HeaderTop";
import HeaderMarquee from "../HeaderMarquee/HeaderMarquee";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";

const Header = () => {
  return (
    <header className="container mx-auto px-5 lg:px-0 py-10">
      <HeaderTop />
      <HeaderMarquee />
      <HeaderNavbar className="mt-5" />
    </header>
  );
};

export default Header;
