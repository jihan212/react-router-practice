import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png';
import facebookImg from '../../images/Facebook.png';
import youtubeImg from '../../images/YouTube.png';
import twitterImg from '../../images/Twitter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faMonument } from '@fortawesome/free-solid-svg-icons'
import './TeamDetail.css';
import { Link } from 'react-router-dom';

const TeamDetail = () => {
    const {id} = useParams();
    const [team , setTeam] = useState({});
    useEffect (() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch (url)
        .then (res => res.json())
        .then (data => setTeam(data.teams[0]))
    },[id])
    return (
        <div>
            <div className="banner"><img src={team.strTeamBanner} alt=""/>
            <div className="logo"> <img src={team.strTeamLogo} alt=""/> </div>
            </div>
<br/>
            <div className="team-details">
            <div className="details">
            <h2>{team.strTeam} </h2>
            <br/>
            <h6> <FontAwesomeIcon icon={faMonument} /> Founded : {team.intFormedYear} </h6>
            <h6> <FontAwesomeIcon icon={faFlag} />  Country : {team.strCountry}</h6>
            <h6> <FontAwesomeIcon icon={faFutbol} /> Sport Type : {team.strSport} </h6>
            <h6> <FontAwesomeIcon icon={faMars} /> Gender : {team.strGender} </h6>
            </div>
            <div className="image">
            {
                team.strGender=== 'Male '? <img src={femaleImg} alt=""/>:<img src={maleImg} alt=""/>
            }
            </div>
            </div>
<br/>
            <div className="team-paragraph">
                <p>{team.strDescriptionEN}</p>
            </div>
<br/>
            <div className="social-link">
                <Link to = {team.strFacebook}>
                <img src={facebookImg} alt=""/>
                </Link>
                <Link to ={team.strYoutube}>
                <img src={youtubeImg} alt=""/>
                </Link>
                <Link to={team.strTwitter}>
                <img src={twitterImg} alt=""/>
                </Link>
            </div>
        </div>
    );
};

export default TeamDetail;