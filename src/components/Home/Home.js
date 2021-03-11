import React, { useEffect, useState } from "react";
import Team from '../Team/Team'
import bgImage from '../../images/bg.jpg'
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then ( res => res.json())
      .then (data => setTeams(data.teams.slice(0,12))
      )
    },[])
    console.log(teams);
    return (
    <div className="Home">
        <div className="bg-image"><img src={bgImage} alt=""/>
            <div className="centered"> <h1> Team Viewer </h1> </div>
        </div>
        <br/>
        <div className="teams">
            {
              teams.map ( team => <Team team = {team}></Team> )
            }
        </div>
    </div>
    );
};

export default Home;