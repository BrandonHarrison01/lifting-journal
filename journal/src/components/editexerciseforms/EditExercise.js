import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../axiosWithAuth';

import './EditExercise.scss'

function EditExercise() {

    // const token = localStorage.getItem('token');

    const [userData, setUserData] = useState();
    const [exerciseType, setExerciseType] = useState('');
    const [exercise, setExercise] = useState({ id: '', exerciseName: ''});
    const [exerciseEdit, setExerciseEdit] = useState();
    const [toggle, setToggle] = useState(false);
    const [objectID, setObjectID] = useState();

    // console.log('id', exercise.id)
    // console.log('name', exercise.exerciseName)
    console.log('testing', objectID, exerciseType, exerciseEdit)

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

    const editExercise = (event, objectID, exerciseType, exerciseEdit) => {
        console.log('objectID', objectID)
        console.log('exerciseType', exerciseType)
        console.log('exerciseEdit', exerciseEdit)

        event.preventDefault()
        axiosWithAuth()
            .put(`https://weightlifingjournalbackend.herokuapp.com/api/exercises/${exerciseType}/${objectID}`, exerciseEdit)
            .then(res => {
                console.log(res)
                // props.history.push('/enterworkout')
            })
            .catch(err => console.log(err))
    }

    const changeHandler = e => {
      e.preventDefault();
      setExerciseEdit({exerciseName: e.target.value})
    }

    const toggleFunc = (event, par) => {
        event.preventDefault();
        return setToggle(par)
    }

    return(
        <form>
            <select onChange={(e) => setExerciseType(e.target.value.toLowerCase())} name='exercise'>
                <option>select</option>
                <option>Arms</option>
                <option>Shoulders</option>
                <option>Back</option>
                <option>Chest</option>
                <option>Legs</option>
                <option>Core</option>
            </select>
            <select onChange={(e) => setObjectID(e.target.value)} className={toggle ? 'hide' : ''}>
                {!userData ? null : userData.map(user => <option key={user.id} value={user.id} >{user.exerciseName}</option>)}
            </select>
            <input 
                className={!toggle ? 'hide' : ''}
                // value={exercise}
                onChange={(e) => changeHandler(e)}
            />
            { !toggle 
                ? 
                <button onClick={(event) => toggleFunc(event, true)} >
                    Edit Exercise
                </button> 
                : 
                <button onClick={(event) => {
                        toggleFunc(event, false)
                        editExercise(event, objectID, exerciseType, exerciseEdit)
                    }}>
                    button
                </button>
            }
        </form>
    )
}

export default EditExercise