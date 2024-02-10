
import React from 'react';
import Leader from './Leader';
import './Leaderboard.css';
import NavigationHome from '../../Components/NavigationHome';

export default function LeaderBoard() {
  const sortedLeader = Leader.sort((a, b) => a.Rank - b.Rank);

  return (
    <div>
      <NavigationHome />
      <h1 className='font-sans mt-2 text-center  pl-32 font-bold text-4xl mb-4 text-white'>Leaderboard</h1>
      {/* Table div */}
      <div className='tableDiv'>
        <table className='table'>
          <thead className='tableHeading'>
            <tr className='tableRow'>
              <th className='tableRow'>User Name</th>
              <th className='tableRow'>Language</th>
              <th className='tableRow'>Rank</th>
            </tr>
          </thead>
          <tbody>
            {sortedLeader.length > 0 ? (
              sortedLeader.map((details, key) => {
                return (
                  <tr key={key}>
                    <td className='flex flex-row justify-center items-center user-details'>
                      <img
                        src={details.img}
                        alt={`Avatar of ${details.Username}`}
                        className=' avatar-img'
                      />
                      <div className='ml-6'>
                        <p>{details.Username}</p>
                      </div>
                    </td>
                    <td>{details.Language}</td>
                    <td>{details.Rank}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan='3'>No Ranks Currently!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
