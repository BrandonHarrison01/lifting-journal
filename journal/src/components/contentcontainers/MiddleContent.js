import React from 'react';
import { Container } from 'reactstrap';
import './MiddleContent.scss'

const MiddleContent = (props) => {
  return (
    <div>
        <Container className="middle-content" fluid>
          <img className="middleContentImg" alt="person exercising" src="https://i.ibb.co/QrJ9vsJ/victor-freitas-n-A0-UDNDbxys-unsplash.jpg" />
          <p className="middleContentText">Track your workouts, tell your fitness story</p>
        </Container>
    </div>
  );
};

export default MiddleContent;