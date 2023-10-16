import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveScores = () => {
  const [cricketData, setCricketData] = useState(null);
  const [hasFetchedData, setHasFetchedData] = useState(false);

  const handleCricketButtonClick = async () => {
    if (!hasFetchedData) {
      const options = {
        method: 'GET',
        url: 'https://cricket-api12.p.rapidapi.com/recentMatches',
        headers: {
          'X-RapidAPI-Key': 'b6ea73e097msh07db5869a025b85p1e89dejsnd0cdd2514a22',
          'X-RapidAPI-Host': 'cricket-api12.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setCricketData(response.data);
        setHasFetchedData(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    console.log('Cricket Data:', cricketData);
  }, [cricketData]);

  const renderCricketData = () => {
    const [expandedRow, setExpandedRow] = useState(null);
  
    if (!cricketData) return null;
  
    const handleRowClick = (index) => {
      setExpandedRow((prevExpandedRow) =>
        prevExpandedRow === index ? null : index
      );
    };
  
    return (
      <div className="flex flex-col p-4">
        <h2 className="font-bold text-xl mb-4">Cricket Events</h2>
        <table className="w-full border-collapse bg-blue-800 text-white">
          <thead>
            <tr>
              <th className="border px-2 py-2">Tournament</th>
              <th className="border px-2 py-2">Team 1</th>
              <th className="border px-2 py-2">Team 2</th>
              <th className="border px-1 py-2">Score 1</th>
              <th className="border px-1 py-2">Score 2</th>
              <th className="border px-2 py-2">Results</th>
            </tr>
          </thead>
          <tbody>
            {cricketData.map((match, index) => (
              <React.Fragment key={index}>
                <tr onClick={() => handleRowClick(index)} className="border-b cursor-pointer">
                  <td className="border px-2 py-2">{match.tournamentName}</td>
                  <td className="border px-2 py-2">{match.team1}</td>
                  <td className="border px-2 py-2">{match.team2}</td>
                  <td className="border px-1 py-2">{match.score1}</td>
                  <td className="border px-1 py-2">{match.score2}</td>
                  <td className="border px-2 py-2">Results</td>
                </tr>
                {expandedRow === index && (
                  <tr>
                    <td colSpan="6" className={`p-4 transition-max-h duration-300 ${expandedRow === index ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                      Results: {match.result}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Live Scores</h1>

      <div className="flex flex-col">
        <button className="border-2 bg-sky-500 p-1 delay-100 hover:text-black hover:bg-sky-400 text-white border-blue-600" onClick={handleCricketButtonClick}>Fetch Data</button>
        {renderCricketData()}
      </div>
    </div>
  );
};

export default LiveScores;
