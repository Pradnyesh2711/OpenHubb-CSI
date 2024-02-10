import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';
import { VscIssues } from 'react-icons/vsc';
import { AiFillProject } from 'react-icons/ai';
import axios from 'axios';

const Card = ({ title, description, issue, contributors }) => {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-80">
      <div className="flex items-center mb-2">
        <AiFillProject size={25} className="mr-2 text-blue-700" />
        <h2 className="text-xl font-bold text-blue-700">{title}</h2>
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
    <div className='p-16 bg-white'>
      <div className="flex">
        <div className="h-fit p-4 grid place-items-center">
          <h1 className="text-2xl font-semibold mb-8">My Repositories</h1>
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
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">{userProfile.name}</h2>
              <img src={userProfile.avatar_url} alt="Profile" className="w-32 h-32 rounded-full" />
              <p className="mt-4">Username: {userProfile.login}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
