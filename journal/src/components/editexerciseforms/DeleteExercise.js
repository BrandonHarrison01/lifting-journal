import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../../axiosWithAuth'

function DeleteExercise(props) {

    const [userData, setUserData] = useState();
    const [exerciseType, setExerciseType] = useState('');
    const [exercise, setExercise] = useState();

    console.log('delete', exercise)

    useEffect(() => {
        if(exerciseType)
        axiosWithAuth()
            .get(`https://weightlifingjournalbackend.herokuapp.com/api/exercises/${exerciseType}`)
            .then(res => {
                console.log(res)
                setUserData(res.data)
            })
            .catch(err => console.log(err))
    }, [ exerciseType ]);

    const deleteExercise = (event, exercise) => {
        event.preventDefault()
        axiosWithAuth()
            .delete(`https://weightlifingjournalbackend.herokuapp.com/api/exercises/${exerciseType}/${exercise}`)
            .then(res => {
                console.log(res)
                // props.history.push('/enterworkout')
            })
            .catch(err => console.log(err))
    }

    return(
        <form>
            <select className='drop-down-type' onChange={(e) => setExerciseType(e.target.value.toLowerCase())} name='exercise'>
                <option>select</option>
                <option>Arms</option>
                <option>Shoulders</option>
                <option>Back</option>
                <option>Chest</option>
                <option>Legs</option>
                <option>Core</option>
            </select>
            <select className='drop-down-ex' onChange={(e) => setExercise(e.target.value)}>
                {!userData ? null : userData.map(user => {
                    return <option key={user.id} value={user.id} >{user.exerciseName}</option>
                })}
            </select>
            <br />
            <button className='delete-btn' onClick={(event) => {
                deleteExercise(event, exercise)
                props.toggle()
            }}>
                Delete
            </button>
        </form>
    )
}

export default DeleteExercise