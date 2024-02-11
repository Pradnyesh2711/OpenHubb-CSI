
import React from 'react';
import Leader from './Leader';
import './Leaderboard.css';
import NavigationHome from '../../Components/NavigationHome';

function LeaderBoard() {
  //const sortedLeader = Leader.sort((a, b) => a.Rank - b.Rank);
  const sortedLeader=Leader.slice().sort((a, b) => a.Rank - b.Rank);
  const top3=sortedLeader.slice(0, 3);
  return (
    <div>
      <NavigationHome />
      <div className='grid place-items-center'>
      <h1 className='font-mono mt-2 font-bold text-4xl mb-4 text-white'>Leaderboard</h1>
      {/* Table div */}
      <div class="wrapper mt-8">
        <div class="winners rank2">
            <h1 class="rank">#2</h1>
            <div class="photo" style={{ backgroundImage: `url(${top3[1].img})` }}></div>
            <h2 class="name">{top3[1].Username}</h2>
        </div>
        <div class="winners rank1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="trophy_icon fa-solid fa-trophy"></i>
            <h1 class="rank">#1</h1>
            <div class="photo" style={{ backgroundImage: `url(${top3[0].img})` }}></div>
            <h2 class="name">{top3[0].Username}</h2>
        </div>
        <div class="winners rank3">
            <h1 class="rank">#3</h1>
            <div class="photo" style={{ backgroundImage: `url(${top3[2].img})` }}></div>
            <h2 class="name">{top3[2].Username}</h2>
        </div>
    </div>

      <div className='mt-8 tableDiv'>
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
                    <td>{details.Languages}</td>
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
    </div>
  );
}

export default LeaderBoard;