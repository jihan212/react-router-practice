import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import bgImage from '../../images/bg.jpg'

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
    console.log(team.idTeam);
    return (
        <div>
            <div className="bg-image"><img src={bgImage} alt=""/>
            <div className="centered"> <h1> Team Viewer </h1> </div>
            </div>
<br/>
            <div>
            <h1>This is about team Detail id : {id}</h1>
            <h2> Name : {team.strTeam}</h2>
            <h3>Sport Type : {team.strSport} </h3>
            </div>
        </div>
    );
};

export default TeamDetail;