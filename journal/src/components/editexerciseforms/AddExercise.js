import React, { useState } from 'react';
import { axiosWithAuth } from '../../axiosWithAuth';

function AddExercise(props) {

    const [workoutType, setWorkoutType] = useState('');
    const [newExercise, setNewExercise] = useState('')
    const token = localStorage.getItem('token');

    console.log('yeet', workoutType, newExercise)

    const addExercise = (event, exercise) => {
        event.preventDefault()
        if(token)
        console.log(exercise)
        axiosWithAuth()
            .post(`https://weightlifingjournalbackend.herokuapp.com/api/exercises/${workoutType}`, exercise)
            .then(res => {
                console.log(res)
                // props.history.push('/enterworkout')
            })
            .catch(err => console.log(err))
    }

    const changeHandler = e => {
      e.preventDefault();
      setNewExercise({'exerciseName': e.target.value})
    }

    return(
        <form>
            <select className='drop-down-type' onChange={(e) => setWorkoutType(e.target.value.toLowerCase())} name='exercise'>
                <option>select</option>
                <option>Arms</option>
                <option>Shoulders</option>
                <option>Back</option>
                <option>Chest</option>
                <option>Legs</option>
                <option>Core</option>
            </select>
            <input 
                type='text' 
                className='input-box'
                onChange={changeHandler}
            />
            <br />
            <button className='add-btn' onClick={(event) => {
                addExercise(event, newExercise)
                props.toggle()    
            }}>
                Add
            </button>
        </form>
    )
}

export default AddExercise