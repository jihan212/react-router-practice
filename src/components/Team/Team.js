import React from 'react';
import {Link} from 'react-router-dom';
import './Team.css'


const Team = (props) => {
    const { idLeague,strLeague } = props.team;
    
    return (
        <div className="team">
            <div className="container">
                <h4> Team ID : {idLeague}</h4>
                <h3> Team Name: {strLeague}</h3>
                <Link to = {`/team/${idLeague}`}><button> Explore </button></Link>
            </div>
        </div>
    );
};

export default Team;



