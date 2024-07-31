import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
return (
    <div className="flex shadow-md bg-gradient-to-tl from-[#00e5ff] to-[#1200ff] justify-between border h-20 items-center px-4">
        <div className="text-2xl font-semibold text-white font-raleway">Dashboard Hydrometeorologi</div>
        <div className="text-2xl font-semibold text-white font-raleway flex flex-row-reverse items-center gap-3">
            Politeknik Negeri Ujung Pandang
            <img src={logo} alt="" className="w-16 h-16 align-middle" />
        </div>
    </div>
);
};

export default Navbar;
