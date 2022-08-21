import { createContext, useReducer } from "react";
export const WorkoutsContext = createContext();
export const WorkoutsReducer = (state,action) => {
    switch (action.type)
    {
        case 'setworkouts':
            return { workouts: action.payload }
        case 'addworkout':
            return { workouts: [...state.workouts, action.payload] }
        case 'deleteworkout':
            return {workouts:state.workouts.filter(w=> w._id!==action.payload._id)}
        default:
            return state
    }
}

export const WorkoutsContextProvider = (props) => {
    const [state, dispatch] = useReducer(WorkoutsReducer, { workouts: null })

    return <WorkoutsContext.Provider value={{ ...state, dispatch }}>
        {props.children}
    </WorkoutsContext.Provider>
}