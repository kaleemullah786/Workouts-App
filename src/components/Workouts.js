import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Workouts = ({ workout }) => {
    const {dispatch}=useWorkoutsContext()
    const handleClick = async () => {
        const response = await fetch('http://localhost:5000/api/' + workout._id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (response.ok)
            dispatch({type:'deleteworkout',payload:json})
}
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}><DeleteIcon /></span>
        </div>
    )
}

export default Workouts