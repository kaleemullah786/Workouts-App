import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, load, reps })
        })
        const json = await response.json()

        if (response.ok)
            dispatch({ type: 'addworkout', payload: json })
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a workout</h3>
            <label >Excersize Title:</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label >Load (in kg):</label>
            <input type="number" value={load} onChange={e => setLoad(e.target.value)} />
            <label >Reps:</label>
            <input type="number" value={reps} onChange={e => setReps(e.target.value)} />
            <button>Add workout</button>
        </form>
    )
}

export default WorkoutForm