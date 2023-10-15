import React from 'react';
import SportsUpdate from '../components/SportsUpdate';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
const SportsPage = () => {
  const apiKey = '32a62fd71df16396bd50fd8936b90bd9768d8cf0dc457846712b2e7b01907241';

  return (
    <div>
      <Navbar />
    <div className='flex flex-col'>
      <h1 className='justify-center text-center text-3xl'>Sports Page</h1>
      <SportsUpdate apiKey={apiKey} />
    </div>
    <Footer/>
    </div>
  );
};

export default SportsPage;
