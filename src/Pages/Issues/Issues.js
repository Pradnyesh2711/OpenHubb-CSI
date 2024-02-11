import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import NavigationHome from '../../Components/NavigationHome';
import Tilt from 'react-parallax-tilt'
import App1 from '../../Pages/Comment/comment'

function Issues() {
    const location = useLocation();
    const apiUrl = new URLSearchParams(location.search).get('url');
    const [issueDetails, setIssueDetails] = useState(null);
    const modifiedUrl = apiUrl.replace("{/number}","")
      const fetchIssueDetails = () => {
        axios.get(modifiedUrl, {
            headers: {
              Authorization: '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'
            }
          })
          .then(response => {
            setIssueDetails(response.data);
          })
          .catch(error => {
            console.error(error);
            })};
      fetchIssueDetails()

    const tags = ['good first issue', 'hactoberfest', 'first-timers-only', 'auto-review','easy']
      
  return (
    
    <div>
        <NavigationHome />
        <div className='m-4 grid grid-cols-2'>
            <div className='grid place-items-center'>
            <h1 className='text-3xl font-semibold mb-9 text-white mt-7'>Issue Details</h1>
            {issueDetails ? (
                <div className='grid grid-cols-3 gap-5'>
                {issueDetails.map(issue => (
                    <a href={issue.html_url} key={issue.id} target="_blank" rel="noopener noreferrer">
                    {/* Make sure the Card component is clickable */}
                    <div className="card grid" style={{ cursor: 'pointer' }}>
                    <div className="bg-white p-6 border rounded-lg shadow-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-80">
                        <div className="flex items-center mb-2">
                        
                        <div>
                            <h2 className="text-xl font-bold text-gray-500">{issue.title}</h2>
                            <div>
                                {tags.map((tag, index) => (
                                <p key={index} className='overflow-wrap border-2 bg-slate-200 rounded-lg m-2'>
                                    {tag}
                                </p>
                                ))}
                            </div>
                            </div>
                        {/* You can add more details from the issue if needed */}
                    </div>
                    </div>
                </div>
                    </a>
                ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <div>
            <App1 />
        </div>
    </div>
    </div>
  );
}

export default Issues;
