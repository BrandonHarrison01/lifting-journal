import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { Link as WorkoutLink } from "react-router-dom";
import './BottomCTA.scss'

const BottomCTA = (props) => {
  let tkn = localStorage.getItem('token');

  return (
    <div>
      <Jumbotron fluid>
        <Container className="homepage-bottom-cta" fluid>
        {tkn ?
        <>
          <h1 className="display-3">Check your dashboard to enter a workout!</h1>
          <WorkoutLink to="/dashboard">
            <Button className="lead">Enter Workout</Button>
          </WorkoutLink>
          </>
          :
          <>
          <h1 className="display-3">Ready to try forLife Fitness?</h1>
          <WorkoutLink to="/signup">
            <Button className="lead">Join Now</Button>
          </WorkoutLink>
          </>
          }
        </Container>
      </Jumbotron>
    </div>
  );
};

export default BottomCTA;