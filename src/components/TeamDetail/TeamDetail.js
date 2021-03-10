import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import bgImage from '../../images/bg.jpg';
import './TeamDetail.css';

const TeamDetail = () => {
    const {id} = useParams();
    const [team , setTeam] = useState({});
    useEffect (() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch (url)
        .then (res => res.json())
        .then (data => setTeam(data.teams))
    },[id])
    console.log(team);
    return (
        <div>
            <div className="bg-image"><img src={bgImage} alt=""/>
            <div className="centered"> <h1> Team Viewer </h1> </div>
            </div>
<br/>
            <div className="team-details">
            <h1>This is about team Detail id : {id}</h1>
            <h2> Name : {team.strTeam} </h2>
            <h3>Sport Type : {team.strSport} </h3>
            </div>
<br/>
            <div className="team-paragraph">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ullam deleniti vel numquam fuga! Nulla, consectetur quasi. Ab sit officiis labore facere quas quod nobis! Nam tempora autem recusandae assumenda, placeat at. Voluptas harum id, voluptatum ex unde labore, eius facilis similique quibusdam error facere praesentium dolorem odio exercitationem. Sit amet repellendus, culpa cum deleniti est fugiat consequuntur ab neque, libero voluptas nihil nisi rem fuga explicabo! Natus voluptate beatae odit eveniet recusandae tenetur voluptates, nam reiciendis dolores, nemo dicta harum facilis, vero ut quos dolorem quo at! Nemo enim quia nobis? Nam, cumque. Quas dolorem numquam neque officia doloremque.</p>
            </div>
        </div>
    );
};

export default TeamDetail;