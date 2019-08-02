import React,{ useState } from 'react'
import TopNav from './navmenus/Nav';
import Footer from './navmenus/Footer';
import WorkoutCard from './WorkoutCard';
import NewWorkoutForm from './NewWorkoutForm'
import './Dashboard.scss'

function Dashboard() {


  const [workout, setWorkout] = useState([])
  const [exercisesInWorkout, setExercisesInWorkout] = useState([])


  const fillInWorkout = work => {
    setExercisesInWorkout([...exercisesInWorkout, work])
  }

  const addWorkout = work => {
    setWorkout([...workout, exercisesInWorkout])
    localStorage.setItem("workouts", JSON.stringify([...workout, exercisesInWorkout]))
    setExercisesInWorkout([]);
  }

  const workoutData = exercisesInWorkout;

  const workouts = localStorage.getItem("workouts");

  return(
    <>
    <TopNav />
    <div className="siteContainer">
      <div className='dashboard-page'>
          <h1 className='title' >Welcome!</h1>
          <NewWorkoutForm workoutData = {workoutData} fillInWorkout={fillInWorkout} submitWorkout={addWorkout}/>
          <section className='dashboard'>
              {workouts && JSON.parse(workouts).map(data =>
              <div key={data.map(d => d.id)}className="cardContainer">
              <h1 className="cardTitle">{data[0].date}</h1>
                {data.map(nestedData =>
                  <WorkoutCard
                  key={nestedData.id}
                  data={nestedData}/>
                )}
                </div> 
              )}
          </section>
      </div>
      </div>
    <Footer />
    </>
  )
}

export default Dashboard