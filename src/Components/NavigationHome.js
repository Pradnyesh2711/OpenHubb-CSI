import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';

const NavigationHome = () => {
    const navigate = useNavigate();
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
        // Use navigate to navigate to the desired route
        navigate('/about');
    };

    const handleLogin = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=4058f61909209bd4fd20&scope=user';
    };

    const navigateToContribute = () => {
        // Use navigate to navigate to the 'contribute' route
        navigate('/contribute');
    };

    const navigateToLeaderboard = () => {
        // Use navigate to navigate to the 'leaderboard' route
        navigate('/leaderboard');
    };

    return (
        <div>
            <nav className="bg-gray-800 p-4 mt-4">
                <div className="mx-2">
                    <div className="flex items-center ">
                        <div className="text-white text-2xl font-bold ml-2">Coding Geeks</div>
                        <div className="">
                            <button
                                className="text-white hover:text-slate-300 mx-4 cursor-pointer"
                                onClick={navigateToContribute}
                            >
                                Contribute
                            </button>
                            <button
                                className="text-white hover:text-slate-300 mx-4 cursor-pointer"
                                onClick={navigateToLeaderboard}
                            >
                                Leaderboard
                            </button>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationHome;
