// Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsProfileOpen(false);
    };

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsMenuOpen(false);
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      };
      const handleLogin = () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=4058f61909209bd4fd20&scope=user';
  };
    return (
        <div >
        <nav className="bg-gray-800 p-4">
        <div className="mx-2">
            <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold ml-2">Coding Geeks</div>
            <div className="">
            <button
                className=" text-white border-white border-2 hover:bg-slate-700 hover:text-white px-2 py-1 rounded-full w-28 h-10 mx-4"
                onClick={toggleMenu}
                >
                 Sign In
                </button>
                <button
                className=" text-white bg-lime-500 px-2 py-1 rounded-full w-28 h-10"
                onClick={handleLogin}
                >
                 Sign Up
                </button>
            </div>
            </div>
        </div>
    </nav>
    </div>
    );
};

export default Navigation;