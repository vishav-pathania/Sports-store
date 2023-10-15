import React, { useState, useEffect } from "react";

const SportsUpdate = ({ apiKey }) => {
  const [scorecardData, setScorecardData] = useState([]);

  useEffect(() => {
    const fetchScorecardData = async () => {
      const response = await fetch(`https://apiv3.apifootball.com/?action=get_events&from=2023-04-05&to=2023-05-07&league_id=152&APIkey=${apiKey}`);
      const data = await response.json();

      setScorecardData(data);
    };

    fetchScorecardData();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold">Football Scorecard History</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {scorecardData.map((match) => (
            <div key={match.id} className="card shadow-md">
              <div className="card-header text-center">
                <h3>{match.team1} vs {match.team2}</h3>
              </div>
              <div className="card-body">
                <p>Score: {match.score1} - {match.score2}</p>
                <p>Status: {match.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsUpdate;
