import React, { useState, useEffect } from 'react';
import {FaUsers} from 'react-icons/fa'
import {VscIssues} from 'react-icons/vsc'
import {AiFillProject} from 'react-icons/ai'
import HoverRepo from './HoverRepo.png'
import Repositories from  '../../Repositories.json'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ title, description, issue, contributors }) => {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-80">
      <div className="flex items-center mb-2">
          <AiFillProject size={25} className="mr-2 text-blue-700" />
          <h2 className="text-xl font-bold text-blue-700" >{title}</h2>
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

const CardDetails = ({ title, description, issue, contributors, languages }) => {
  // Convert the languages object into an array of strings
  const languageList = Object.keys(languages);

  return (
    <div className="bg-white p-6 border rounded-lg shadow-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800">
      <div className="flex items-center mb-2">
          <AiFillProject size={25} className="mr-2 text-blue-700" />
          <h2 className="text-xl font-bold text-blue-700" >{title}</h2>
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
        <div className="flex items-center mb-2">
          <FaUsers size={22} className="mr-2 text-blue-700" />
          {/* Render each language */}
          {languageList.map((language, index) => (
            <p key={index} className="text-gray-500 mx-2">{language}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

function Contribute() {

  const [Contributors, setContributors] = useState([]);
  const getContributors = (link) => {
    
      axios.get(link, {
      headers: {
        Authorization: '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'
      }
    })
    .then(response => {
      setContributors(response.data[0].contributions);
    })
    .catch(error => {
      console.error(error);
    });
    };

    const [Languages, setLanguages] = useState([]);
    const getLanguages = (link) => {
      
        axios.get(link, {
        headers: {
          Authorization: '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'
        }
      })
      .then(response => {
        setLanguages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      console.log(Languages)
      };

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className='p-16 bg-white'>
    <div className="flex">
      <div className="w-3/4 p-4">
        <h1 className="text-xl font-semibold mb-4">Cards</h1>
        <div className="grid grid-cols-2 gap-7">
          {Repositories.map(card => (
            <Link to={`/issues?url=${encodeURIComponent(card.issues_url)}`} key={card.id} className="cursor-pointer hover:shadow-md hover:shadow-gray-800 hover:rounded-md"
                onMouseEnter={() => {
                  setSelectedCard(card);
                  getContributors(card.contributors_url)
                  getLanguages(card.languages_url)
                  
                }}
                onMouseLeave={() => setSelectedCard(null)}>
              <Card title={card.full_name} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-semibold mb-4">Quick View</h1>
        {selectedCard ? (
          <CardDetails title={selectedCard.full_name} description={selectedCard.description}
            languages={Languages} contributors={Contributors}/>
            ) : (
          <div className='grid place-items-center mt-20'>
            <p className="text-gray-500">Hover on a card to view details</p>
            <img src={HoverRepo} alt='Hover' className=" place-self-center mt-2"></img>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Contribute;