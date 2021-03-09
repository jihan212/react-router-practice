import React, { useEffect, useState } from "react";
import Team from '../Team/Team'
import bgImage from '../../images/bg.jpg'
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then ( res => res.json())
      .then (data => setTeams(data.leagues.slice(0,9))
      )
    },[])
    
    return (
    <div className="Home">
        <div className="bg-image"><img src={bgImage} alt=""/>
            <div className="centered"> <h1>Team</h1> </div>
        </div>
     {
       teams.map ( team => <Team team = {team}></Team> )
     }
    </div>
    );
};

export default Home;