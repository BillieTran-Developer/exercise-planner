import { createContext, useReducer } from "react"
import exerciseReducer from './ExerciseReducer'

const ExerciseContext = createContext()

// Env variables 
// API Key
const EXERCISE_DB_KEY = process.env.REACT_APP_EXERCISE_DB_KEY

export const ExerciseProvider = ({children}) => {
    const initialState = {
        exercises: [],
        exercise: {},
        loading: false,
    }

    const [state, dispatch] = useReducer(exerciseReducer, initialState)

    // Get exercises search results
    const searchExercise = async (text) => {
        setLoading()

        const params = text

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
                'X-RapidAPI-Key': `${EXERCISE_DB_KEY}`
            }
        };
        
        const res = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${params}`, options)

        const data = await res.json()

        console.log(data)

        dispatch({
            type: 'GET_EXERCISES',
            payload: data,
        })
    }

    // Return a single exercise
    const selectedExercise = (exercises, selected) => {
        setLoading()

        let data = {}
        
        // Filter through exercises for selected exercise
        exercises.filter(exercise => {
            if(exercise.name === selected){
                data = exercise
            }
        })

        dispatch({
                    type: 'GET_EXERCISE',
                    payload: data,
                })
    }

    // Set Loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <ExerciseContext.Provider value={{
        ...state,
        searchExercise,
        selectedExercise,
    }}>
        {children}
    </ExerciseContext.Provider> 

}

export default ExerciseContext