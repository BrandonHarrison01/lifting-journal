import React from 'react';
import { Container, CardBody, CardText } from 'reactstrap';
import "./WorkoutCard.scss";

export default function WorkoutCard(props) {
const { data } = props;
  return (
    <Container className="exerciseCard">
        <CardBody className="exerciseCardContent">
          <CardText className="cardChild">Type: {data.type}</CardText>
          <CardText className="cardChild">Exercise: {data.workout}</CardText>
          <CardText className="cardChild">Sets: {data.sets}</CardText>
          <CardText className="cardChild">Reps: {data.reps}</CardText>
          <CardText className="cardChild">Weight: {data.weight}</CardText>
          <CardText className="cardChild">Difficulty: {data.difficulty}</CardText>
        </CardBody>
    </Container>
  );
}