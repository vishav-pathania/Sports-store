import React from 'react';
import LiveScores from './api/LiveScores';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
const SportsPage = () => {
  return (
    <div>
      <Navbar />
    <div className='flex flex-col bg-gradient-to-r text-black from-blue-200 via-sky-100 to-blue-200'>
      <h1 className='justify-center text-center text-3xl'>Sports Page</h1>
      <LiveScores />
    </div>
    <Footer/>
    </div>
  );
};

export default SportsPage;
