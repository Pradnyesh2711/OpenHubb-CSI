import React, { useState } from 'react';
import repositories from './Searchb.js'; 
import Tilt from 'react-parallax-tilt';
import NavigationHome from '../../Components/NavigationHome.js';

const Card = ({ title, languages }) => {
    const getRandomColor = () => {
        const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-orange-500'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
            <div className="bg-white p-6 border-2 border-black rounded-lg shadow-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800">
                <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold text-blue-700">{title}</h2>
                </div>
                <div>
                    {languages && languages.map((language, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <span className={`rounded-full w-4 h-4 mr-2 ${getRandomColor()}`}></span>
                            <span className="text-lg font-semibold text-blue-700">{language}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Tilt>
    );
};

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredRepositories = repositories.filter(repo =>
        repo.languages.some(language => language.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div>
            <div className='m-5 grid place-items-center'>
                <h2 className='text-white text-2xl m-10 font-semibold'>Recommended Repositories</h2>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search by language"
                    className="p-2 w-full max-w-xl rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
                />
                <div className="repository-list text-white grid grid-cols-1 gap-4 mt-8">
                    {filteredRepositories.map((repo, index) => (
                        <Card
                            key={index}
                            title={repo.name}
                            languages={repo.languages}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
