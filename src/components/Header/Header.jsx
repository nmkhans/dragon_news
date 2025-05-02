import React from "react";
import HeaderTop from "../HeaderTop.jsx/HeaderTop";
import HeaderMarquee from "../HeaderMarquee/HeaderMarquee";

const Header = () => {
  return (
    <header className="container mx-auto px-5 lg:px-0 py-10">
      <HeaderTop />
      <HeaderMarquee />
    </header>
  );
};

export default Header;
