import {  useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import WorkoutForm from "./WorkoutForm"
import Workouts from "./Workouts"


const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      
      const host = 'http://localhost:5000';
      const response = await fetch(`${host}/api`, { mode: 'cors' })
      const json = await response.json()
      if (response.ok)
        dispatch({type:'setworkouts',payload:json})
    }
    
    fetchWorkouts()
  },[dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout,index) =>
          <Workouts key={index} workout={workout} />
        )}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home