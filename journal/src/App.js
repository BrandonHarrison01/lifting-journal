import React from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import NewWorkoutForm from './components/NewWorkoutForm';
import Dashboard from './components/Dashboard.js';
import Signup from './components/Signup.js';
import Login from './components/Login';
import EditExerciseForm from './components/EditExerciseForm';

import './App.scss';

function App(props) {
  
  // useEffect(() => {
  //   fetch('https://weightlifingjournalbackend.herokuapp.com/api/users')
  //     .then(res => res.json())
  //     .then(users => console.log(users))

  // }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/enterworkout' component={NewWorkoutForm} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        {/* <Route path='/edit-exercise' render={(props) => <EditExerciseForm {...props} />} /> */}
      </Switch>
    </div>
  );
}

export default App;