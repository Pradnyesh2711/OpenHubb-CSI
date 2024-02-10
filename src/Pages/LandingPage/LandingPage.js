import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-scroll";
import developer from '../../Components/Images/developer.png'
import star from '../../Components/Images/star.gif'
import arrow from '../../Components/Images/arrow.png'
import Comment from '../../Components/comment';
import './LandingPage.css'
import Navigation from '../../Components/Navigation';

function LandingPage()
{
    return(
        <div>
        <Navigation/>
          <div className='flex flex-row mt-7'>
    {/* Headings */}
    <div className='flex flex-col justify-center'>
    <div>
      {/* <Comment/> */}
      <img className='absolute ml-20 w-20' src={star}/>
        <h1 className='relative font-sans mt-10 text-left pl-32 font-bold text-7xl text-lime-400'>Contribute & Earn</h1>
        </div>
        <h2 className='font-sans mt-2 text-left pl-32 font-bold text-6xl text-white'>using your development</h2>
        <h2 className='font-sans mt-2 text-left pl-32 font-bold text-6xl text-white'>skills</h2>
         <h4 className='font-sans mt-5 text-left pl-32 font-light text-3xl text-white'>Contribute to open source projects and climb your way up!</h4>
         <button className=" flex items-center gap-1 text-black font-Yeseva bg-lime-500 px-4 py-1 rounded-full w-44 h-10 ml-32 mt-9">
         <span className='text-center font-sans pr-1  text-xl pd ' >Get Started</span>
        <img className="w-6 h-6" src={arrow} alt="Icon" /> 
    </button>
    </div>
    {/* Image coder */}
    <div className='ml-48'>
       <img  src={developer}/>
    </div>
    </div>
       {/* Stats */}
      <div className='mt-24'>
  <div className='border-t  border-opacity-30 border-gray-300'></div>
  <div className='flex justify-between items-center w-full'>
    <div className='flex-1 text-center border-r  border-opacity-30 border-gray-300 mt-6 mb-6 pr-4'>
      <h1 className='font-sans mt-2 font-bold text-5xl text-white'>3K+</h1>
      <h3 className='font-sans mt-2  text-2xl text-indigo-400'>Repos Created</h3>
    </div>
    <div className='flex-1 text-center border-r border-opacity-30 border-gray-300  mt-6 mb-6 pr-4 pl-4'>
      <h1 className='font-sans mt-2 font-bold text-5xl text-white'>1K+</h1>
      <h3 className='font-sans mt-2  text-2xl text-indigo-400'>PR's Submitted</h3>
    </div>
    <div className='flex-1 text-center mt-6 mb-6 pl-4'>
      <h1 className='font-sans mt-2 font-bold text-5xl text-white'>50K+</h1>
      <h3 className='font-sans mt-2 text-2xl text-indigo-400'>OSS Impressions</h3>
    </div>
  </div>
  <div className='border-t border-b border-opacity-30 border-gray-300'></div>
</div>

  <div className='flex flex-row flex-wrap justify-center'>
    <div className=' cards bg-white border max-w-xs  overflow-hidden shadow-xl neon-border w-60 mt-4 ml-7 mr-7 h-72 absolute top-36 md:mt-0 sm:max-w-md xl:p-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100 '>
        <img className='mt-2 w-24  px-4' src={arrow}/>
        <h2 className="font-bold text-lg text-left mb-2 mt-5 px-4 text-white"> Find Doctors </h2>
        <p className='text-left px-4 mb-1 text-white'>You will be able to find the best doctors possible in the field of dental and derma!</p>
    </div>
     <div className='bg-white cards  border max-w-xs  overflow-hidden shadow-xl neon-border w-60 mt-4 ml-7 mr-7 h-72 absolute top-36 md:mt-0 sm:max-w-md xl:p-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100'>
        <img className='mt-2 w-24  px-4' src={arrow}/>
        <h2 className="font-bold text-lg text-left mb-2 mt-5 px-4 text-white"> Find Doctors </h2>
        <p className='text-left px-4 mb-1 text-white'>You will be able to find the best doctors possible in the field of dental and derma!</p>
    </div>
     <div className=' bg-white cards  border max-w-xs  overflow-hidden shadow-xl neon-border w-60 mt-4 ml-7 mr-7  h-72 absolute top-36 md:mt-0 sm:max-w-md xl:p-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100'>
        <img className='mt-2 w-24  px-4' src={arrow}/>
        <h2 className="font-bold text-lg text-left mb-2 mt-5 px-4 text-white"> Find Doctors </h2>
        <p className='text-left px-4 mb-1 text-white'>You will be able to find the best doctors possible in the field of dental and derma!</p>
    </div>
    <div className='bg-white cards  border max-w-xs  overflow-hidden shadow-xl neon-border w-60 mt-4 ml-7 h-72 absolute top-36 md:mt-0 sm:max-w-md xl:p-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-100'>
        <img className='mt-2 w-24  px-4' src={arrow}/>
        <h2 className="font-bold text-lg text-left mb-2 mt-5 px-4 text-white"> Find Doctors </h2>
        <p className='text-left px-4 mb-1 text-white'>You will be able to find the best doctors possible in the field of dental and derma!</p>
    </div>  
  </div>
  
  <div className='mt-64 '>
    <h3 className='font-mono mt-2 font-bold text-3xl text-lime-400 text-center'>Let your code speak for you</h3>
    <h2 className='font-sans mt-2 font-bold text-3xl text-white text-center'>We crunch data from your commits, issues and PRs</h2>
    <h3 className='font-sans mt-2 font-light text-xl text-white text-center' >to match you to paid contribution opportunities that fit your skills.</h3>
  </div>
  <br></br>
        </div>
    )
}

export default LandingPage