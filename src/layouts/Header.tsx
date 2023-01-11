import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header
      className="h-16 bg-dark sticky top-0 z-50 flex items-center justify-between"
      style={{ borderBottom: "1px solid #525866" }}
    >
      <div
        className="w-60 h-full flex items-center justify-center"
        style={{ borderRight: "1px solid #525866" }}
      >
        <h1
          className="text-textLight text-3xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          LOGO
        </h1>
      </div>
      <div className="flex items-center gap-x-4 px-4">
        <div className="text-light">notification</div>
        <div className="w-8 h-8 rounded-full bg-amber-500"></div>
      </div>
    </header>
  );
}

export default Header;
