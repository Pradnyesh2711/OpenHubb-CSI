
import React, { useState } from 'react';
import axios from 'axios';
import NavigationHome from '../../Components/NavigationHome';
import  './Chatbot.css';

function Chatbot() {
  const [chats, setChats] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleSend = async () => {
    if (userInput.trim() === '') {
      // Don't send empty messages
      return;
    }

    // Add user input to chats
    setChats([...chats, { type: 'user', message: userInput }]);

    try {
      // Send user input to chatbot
      const response = await axios.post('http://localhost:3010', { query: userInput });
      console.log(response.data);

      // Update bot response and ask for input
      setBotResponse(response.data.result);
      const botPoints = response.data.result.split('.').filter(point => point.trim() !== '');
      setChats([...chats, { type: 'bot', points: botPoints }]);
    } catch (error) {
      console.error('Error:', error);
    }

    // Clear user input
    setUserInput('');
  };

  return (
    <div >
    <div className='-mt-4'>
    <NavigationHome/>
    </div>
    <div className='flex justify-center  bg-white h-44 '>
        <h3 className='tagline mt-12 text-center'>Solve Your Doubts</h3>
    </div>
      {/* Display chat messages */}
      <div>
      {chats.map((chat, index) => (
        <div key={index} className={`chat ${chat.type === 'user' ? 'chat-start' : 'chat-end'}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt={`${chat.type} avatar`} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            {chat.type === 'user' ? 'You' : 'Bot'}
          </div>
          <div className="chat-bubble">
            {chat.type === 'bot' ? (
              <ul>
                {chat.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{chat.message}</p>
            )}
          </div>
          {chat.type === 'user' && <div className="text-xl chat-footer opacity-50">Sent</div>}
        </div>
      ))}

      {/* User input */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="User avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          You
        </div>
        <div className="chat-bubble">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="text-xl chat-footer opacity-50">
          Sent
        </div>
      </div>

      {/* Send button */}
      <button
        className="w-full text-xl text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
    </div>
  );
}

export default Chatbot;
