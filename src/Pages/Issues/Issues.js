import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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

      const Card = ({ title }) => {
        return (
          <div className="bg-white p-6 border rounded-lg shadow-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-80">
            <div className="flex items-center mb-2">
                
                <h2 className="text-xl font-bold text-blue-700" >{title}</h2>
            </div>
          </div>
        );
      };

  return (
    <div id='issues' className='m-20'>
      <h1>Issue Details</h1>
      {issueDetails ? (
        <div className='grid grid-cols-3 gap-5'>
          {issueDetails.map(issue => (
            <a href={issue.html_url} key={issue.id} target="_blank" rel="noopener noreferrer">
              {/* Make sure the Card component is clickable */}
              <div className="card" style={{ cursor: 'pointer' }}>
              <div className="bg-white p-6 border rounded-lg shadow-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-80">
                <div className="flex items-center mb-2">
                
                <h2 className="text-xl font-bold text-blue-700" >{issue.title}</h2>
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
  );
}

export default Issues;
