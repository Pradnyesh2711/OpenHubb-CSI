import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';

const NavigationHome = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const [userProfile, setUserProfile] = useState(null);

    // useEffect(() => {
    //     // Check if the user profile exists in local storage
    //     const userProfileData = localStorage.getItem('userProfile');
    //     console.log(userProfileData, params)
    //     if (userProfileData) {
    //         setUserProfile(JSON.parse(userProfileData));
    //     } else {
    //         // If the user profile doesn't exist in local storage, check if the user is logging in
    //         if (params.get('code')) {
    //             getUserDetails();
    //         }
    //     }
    // }, [params]);

    const handleLogin = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=4058f61909209bd4fd20&scope=user';
    };


        // // Use the access token to fetch user details from GitHub
        // const userResponse = await fetch('https://api.github.com/user', {
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`
        //     }
        // });
        // const userData = await userResponse.json();
    
        // // Return user data to the client
        // res.json(userData);
   
        // console.log(await res.json())


    const handleLogout = () => {
        // Clear user profile from state and local storage
        setUserProfile(null);
        localStorage.removeItem('userProfile');
    };

    const navigateToContribute = () => {
        navigate('/contribute');
    };

    const navigateToLeaderboard = () => {
        navigate('/leaderboard');
    };

    const navigatetoChat= () => {
        navigate('/chatbot');
    };

    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="mx-2">
                    <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-white text-2xl font-bold ml-2">Coding Geeks</div>
                            <button className="bg-white text-xl font-bold m5-2 border-2 hover:bg-slate-700 hover:text-white px-2 py-1 rounded-full w-28 h-10 mx-4"
                            onClick={navigatetoChat}>Chat</button>
                        </div>
                        <div className="flex items-center">
                            <button
                                className=" text-white border-white border-2 hover:bg-slate-700 hover:text-white px-2 py-1 rounded-full w-28 h-10 mx-4"
                                onClick={navigateToContribute}
                            >
                                Contribute
                            </button>
                            <button
                                className=" text-white border-white border-2 hover:bg-slate-700 hover:text-white px-2 py-1 rounded-full w-28 h-10 mx-4"
                                onClick={navigateToLeaderboard}
                            >
                                Leaderboard
                            </button>
                            {userProfile ? (
                                <div className="relative">
                                    <img
                                        src={userProfile.avatar_url}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                        onClick={() => navigate('/profile')}
                                    />
                                    <button
                                        onClick={handleLogout}
                                        className="absolute top-0 right-0 mt-1 mr-1 text-xs text-gray-500"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <FaCircleUser
                                    onClick={handleLogin}
                                    size={30}
                                    className="text-white hover:text-slate-300 mx-4 cursor-pointer"
                                >
                                    Login
                                </FaCircleUser>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationHome;
