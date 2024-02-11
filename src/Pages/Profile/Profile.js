import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { VscIssues } from 'react-icons/vsc';
import { AiFillProject } from 'react-icons/ai';
import axios from 'axios';
import NavigationHome from '../../Components/NavigationHome';
import Tilt from 'react-parallax-tilt'

const Card = ({ title, description, issue, contributors }) => {
    return (
      <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
        <div className="bg-white h-48 p-6 border-2 border-black rounded-lg shadow-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800">
          <div className="flex items-center mb-2">
            <AiFillProject size={30} className="mr-2 text-blue-700" />
            <h2 className="text-xl font-bold text-blue-700 overflow-hidden" style={{ maxHeight: "3.2em", lineHeight: "1.6em", textOverflow: "ellipsis" }}>{title}</h2>
          </div>
          <p className="text-gray-600 mb-4 overflow-hidden" style={{ maxHeight: "3.2em", lineHeight: "1.6em", textOverflow: "ellipsis" }}>{description}</p>
          <hr className="my-4 border-t-2 border-gray-200" />
          <div className='grid grid-cols-2'>
            <div className="flex items-center mb-2">
              <VscIssues size={20} className="mr-2 text-green-500" />
              <p className="text-gray-500">{issue} Issues</p>
            </div>
            <div className="flex items-center mb-2">
              <FaUsers size={22} className="mr-2 text-blue-700" />
              <p className="text-gray-500">{contributors} Contributors</p>
            </div>
          </div>
        </div>
      </Tilt>
    );
  };

function Profile() {
  const [Repos, setRepos] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
const user="Pradnyesh2711"
  useEffect(() => {
    // Fetch repositories data from GitHub API
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    // Fetch user profile data from GitHub API
    axios.get(`https://api.github.com/users/${user}`)
      .then(response => {
        setUserProfile(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div >
    <NavigationHome />
    <div className='px-16 mt-5'>
      
      <div className="flex">
        <div className="w-3/4 p-4 grid place-items-center">
          <h1 className="text-3xl font-semibold mb-9 text-white">Your Repositories</h1>
          <div className="grid grid-cols-2 gap-7">
            {Repos && Repos.map(card => (
              <div key={card.id} className="cursor-pointer">
                <Card title={card.full_name} description={card.description} issue={card.issue} contributors={card.contributors} />
              </div>
            ))}
          </div>
        </div>
        <div>
          {userProfile && (
            <Tilt>
            <div className="max-w-fit my-20 mx-8 rounded-lg overflow-hidden shadow-lg bg-white grid place-items-center">
            <img className="w-2/3 h-auto rounded-full p-5" src={userProfile.avatar_url} alt="Profile" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{userProfile.name}</div>
              <div className="text-gray-700 text-base mb-2">@{userProfile.login}</div>
              
            </div>
            <div className="flex justify-between px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Followers: {userProfile.followers}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Following: {userProfile.following}
            </span>
            </div>
            <div className="px-6 pb-4 mt-3">
              <p className="text-gray-600 text-sm">Joined: {userProfile.created_at.split("T")[0]}</p>
              <p className="text-gray-600 text-sm">Last updated: {userProfile.updated_at.split("T")[0]}</p>
            </div>
          </div>
          </Tilt>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
