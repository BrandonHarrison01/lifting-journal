import React from "react";
import MainButton from "./Mainbuttons.js";
import { Jumbotron } from 'reactstrap';
import { Link as WorkoutLink } from "react-router-dom";
import "./MainButtonContainer.scss";

function MainButtonContainer() {

  let tkn = localStorage.getItem('token');

  const deleteTkn = event => {
    localStorage.removeItem('token');
  }
  
  return (
    <Jumbotron fluid>
    <div className="mainbtncontainer">
    { tkn ?
      <WorkoutLink className="mainBtn" to="/dashboard">
      <MainButton 
        title = "Track Your Workout"
        content = "Track your workouts by weight, sets, reps, exercise, and much more"
        arrow = "→"
      />
      </WorkoutLink>
      :
      <WorkoutLink className="mainBtn" to="/login">
    <MainButton 
      title = "Track Your Workout"
      content = "Track your workouts by weight, sets, reps, exercise, and much more"
      arrow = "→"
    />
        </WorkoutLink>
      }
    <div className="mainBtn">
    <MainButton 
      title = "Crush Your Workout"
      content = "Making gains has become that much easier"
    />
    </div>
    <div className="mainBtn">
    <MainButton 
      title = "Post Your Progress"
      content = "Upload your progress shots, see your body change in real-time"
      arrow = "Coming Soon!"
    />
    </div>
    </div>
    </Jumbotron>
  );
}

export default MainButtonContainer;