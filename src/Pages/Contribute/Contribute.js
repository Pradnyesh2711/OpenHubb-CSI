import React, { useState, useEffect } from 'react';
import {FaUsers} from 'react-icons/fa'
import {VscIssues} from 'react-icons/vsc'
import {AiFillProject} from 'react-icons/ai'
import HoverRepo from './HoverRepo.png'
import axios from 'axios';

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

const CardDetails = ({ title, description, issue, contributors }) => {
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
      </div>
    </div>
  );
};

function Contribute() {

  const [Repos, setRepos] = useState(null);
useEffect(() => {
  axios.get('https://api.github.com/users', {
  headers: {
    Authorization: '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'
  }
})
.then(response => {
  setRepos(response.data);
})
.catch(error => {
  console.error(error);
});
}, []);

console.log(Repos)

  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1 jnernjnse jcnkjsenjcj jwenrcjnewrjk njcnejw jenrf jrenfjnewjnf ejnrfj ejnrfjenr jenrfj',
      issues: 322,
      contributors: 10
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2 awnedjk awendjkwe jnwdjkw jwne',
      issues: 322,
      contributors: 10
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for Card 3 waned wned jwned jnwe wjken',
      issues: 322,
      contributors: 10
    },
    {
      id: 4,
      title: 'Card 1',
      description: 'Description for Card 1 jnernjnse jcnkjsenjcj jwenrcjnewrjk njcnejw',
      issues: 322,
      contributors: 10
    },
    {
      id: 5,
      title: 'Card 1',
      description: 'Description for Card 1 jnernjnse jcnkjsenjcj jwenrcjnewrjk njcnejw',
      issues: 322,
      contributors: 10
    },
  ];

  return (
    <div className='p-16 bg-white'>
    <div className="flex">
      <div className="w-3/4 p-4">
        <h1 className="text-xl font-semibold mb-4">Cards</h1>
        <div className="grid grid-cols-2 gap-7">
          {Repos.map(card => (
            <div key={card.id} className="cursor-pointer"
                onMouseEnter={() => setSelectedCard(card)}
                onMouseLeave={() => setSelectedCard(null)}>
              <Card title={card.full_name} description={card.description} issue={card.issues} contributors={card.contributors}/>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-semibold mb-4">Quick View</h1>
        {selectedCard ? (
          <CardDetails title={selectedCard.title} description={selectedCard.description}
            issue={selectedCard.issues} contributors={selectedCard.contributors}/>
        ) : (
          <div className='grid place-items-center mt-10'>
            <p className="text-gray-500">Hover on a card to view details</p>
            <img src={HoverRepo} alt='Hover' className=" place-self-center"></img>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Contribute;