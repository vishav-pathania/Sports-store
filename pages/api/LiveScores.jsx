import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveScores = () => {
  const [cricketData, setCricketData] = useState(null);
  const [footballData, setFootballData] = useState(null);
  const [hasFetchedCricketData, sethasFetchedCricketData] = useState(false);
  const [hasFetchedFootballData, setHasFetchedFootballData] = useState(false);

  const handleFootballButtonClick = async () => {
    
      const options = {
        method: 'GET',
        url: 'https://footapi7.p.rapidapi.com/api/matches/live',
        headers: {
          'X-RapidAPI-Key': 'b6ea73e097msh07db5869a025b85p1e89dejsnd0cdd2514a22',
          'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        } 
      };

      try {
        const response = await axios.request(options);
        setFootballData(response.data);
        setHasFetchedFootballData(true);
      } catch (error) {
        console.error(error);
      }
  
  }

  useEffect(() => {
    console.log('Football Data:', footballData);
  }, [footballData]);


  const renderFootballData = () => {
    if (!footballData || !footballData.events || footballData.events.length === 0) {
      return <div>No football events available.</div>;
    }
  
    // Filter events that contain 'league' or 'liga' in their names
    const filteredEvents = footballData.events.filter((event) =>
      event.tournament.name.toLowerCase().includes('league')
    );
  
    if (filteredEvents.length === 0) {
      return <div>No matching football events found.</div>;
    }
  
    return (
      <div className="flex flex-col p-4">
        <h2 className="font-bold text-xl mb-4">Football Events</h2>
        <table className="table-auto md:w-4/5 border-collapse bg-teal-400 text-green-950">
          <thead>
            <tr>
              <th className="border px-2 py-2">Home Team</th>
              <th className="border px-2 py-2">Home Score</th>
              <th className="border px-2 py-2">Away Team</th>
              <th className="border px-2 py-2">Away Score</th>
              <th className="border px-2 py-2">Status</th>
              <th className="border px-2 py-2">Tournament</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event, index) => (
              <tr key={index} className="border-b">
                <td className="border px-2 py-2">{event.homeTeam.name}</td>
                <td className="border px-2 py-2">{event.homeScore.display}</td>
                <td className="border px-2 py-2">{event.awayTeam.name}</td>
                <td className="border px-2 py-2">{event.awayScore.display}</td>
                <td className="border px-2 py-2">{event.status.description}</td>
                <td className="border px-2 py-2">{event.tournament.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  const handleCricketButtonClick = async () => {
   
      const options = {
        method: 'GET',
        url: 'https://cricketapi21.p.rapidapi.com/api/cricket/matches/live',
        headers: {
          'X-RapidAPI-Key': 'b6ea73e097msh07db5869a025b85p1e89dejsnd0cdd2514a22',
          'X-RapidAPI-Host': 'cricketapi21.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setCricketData(response.data);
        sethasFetchedCricketData(true);
      } catch (error) {
        console.error(error);
      }
    
  };

  useEffect(() => {
    console.log('Cricket Data:', cricketData);
  }, [cricketData]);


  const renderCricketData = () => {
    if (!cricketData || !cricketData.events || cricketData.events.length === 0) {
      return <div>No cricket events available.</div>;
    }
  
    return (
      <div className="flex flex-col p-4">
        <h2 className="font-bold text-xl mb-4">Cricket Events</h2>
        <table className="table-auto md:w-4/5 border-collapse bg-sky-400 text-blue-950">
          <thead>
            <tr>
              <th className="border px-2 py-2">Home Team</th>
              <th className="border px-2 py-2">Away Team</th>
              <th className="border px-2 py-2">Status</th>
              <th className="border px-2 py-2">Scores 1st inning</th>
              <th className="border px-2 py-2">Scores 2nd inning</th>
              <th className="border px-2 py-2">Wickets</th>
              <th className="border px-2 py-2">Run Rate</th>
              <th className="border px-2 py-2">Overs</th>
              <th className="border px-2 py-2">Tournament</th>
            </tr>
          </thead>
          <tbody>
            {cricketData.events.map((event, index) => (
              <tr key={index} className="border-b">
                <td className="border px-2 py-2">{event.homeTeam.name}</td>
                <td className="border px-2 py-2">{event.awayTeam.name}</td>
                <td className="border px-2 py-2">{event.status.description}</td>
                <td className="border px-2 py-2">{event.awayScore.current}</td>
                <td className="border px-2 py-2">{event.homeScore.current}</td>
                <td className="border px-2 py-2">
                  {event.awayScore.innings.inning1.wickets}
                </td>
                <td className="border px-2 py-2">
                  {event.awayScore.innings.inning1.runRate}
                </td>
                <td className="border px-2 py-2">
                  {event.awayScore.innings.inning1.overs}
                </td>
                <td className="border px-2 py-2">{event.tournament.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  return (
    <div className="p-4 m-1">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Live Scores</h1>

      <div className="flex flex-col">
        Get Cricket Live Stats
        <button className="border-2 w-28 rounded-md bg-sky-500 p-1 delay-100 hover:text-black hover:bg-sky-400 text-white border-blue-600" onClick={handleCricketButtonClick}>Fetch Data</button>
        {renderCricketData()}
      </div>
      <div className="flex flex-col">
        Get Football Live Stats
        <button className="border-2 w-28 rounded-md bg-teal-500 p-1 delay-100 hover:text-black hover:bg-teal-400 text-white border-teal-600" onClick={handleFootballButtonClick}>Fetch Data</button>
        {renderFootballData()}
      </div>

    </div>
  );
};

export default LiveScores;
