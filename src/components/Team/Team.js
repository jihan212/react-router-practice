import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Team.css'


const Team = (props) => {
    const { idTeam,strTeam, strTeamBadge, strSport } = props.team;
    
    return (
        <div className="grid"> 
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }} className="box" >
                            <Card.Img variant="top" src={strTeamBadge} />
                        <Card.Body>
                            <Card.Title>{strTeam}</Card.Title>
                            <Card.Text>
                            Sport Type: {strSport}
                            </Card.Text>
                            <Link to= {"/team/"+idTeam}>
                            <Button variant="primary">See Details</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Team;



