import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <img
          src="./images/logo.png"
          alt="Logo"
          className="w-8 h-8"
        />
        <p className="text-slate-600">copyright © 2024 all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
