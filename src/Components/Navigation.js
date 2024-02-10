import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
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
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    function handleLogin() {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=4058f61909209bd4fd20&scope=user';
    }

    function handleOAuthRedirect() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            exchangeCodeForToken(code);
        }
    }

    function exchangeCodeForToken(code) {
        fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                client_id: '4058f61909209bd4fd20',
                client_secret: 'YOUR_CLIENT_SECRET',
                code: code
            })
        })
        .then(response => response.json())
        .then(data => {
            const accessToken = data.access_token;
            fetchUserData(accessToken);
        })
        .catch(error => {
            console.error('Error exchanging code for access token:', error);
        });
    }

    function fetchUserData(accessToken) {
        fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        .then(response => response.json())
        .then(userData => {
            const username = userData.login; // Extract username from user data
            console.log( username);
            localStorage.setItem('username', username); // Store the username locally
            // Optionally, you can redirect the user to another page or perform other actions
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    }

    handleOAuthRedirect();

    return (
        <div>
            <nav className="bg-gray-800 p-4 mt-4">
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
