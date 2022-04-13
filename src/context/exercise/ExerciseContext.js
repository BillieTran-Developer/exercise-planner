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
        error: null
    }

    const [state, dispatch] = useReducer(exerciseReducer, initialState)

    // Get exercises search results
    const searchExercise = async (params) => {
        
        setLoading()

        // Api OPTIONS method request
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
                'X-RapidAPI-Key': `${EXERCISE_DB_KEY}`
            }
        };
        
        try {
            // Fetch and set data
            const res = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${params}`, options)

            // Checks response for errors
            if(!res.ok) {
                throw new Error(res.statusText)
            }

            const data = await res.json()

            // Set exercises data and set loading to false
            dispatch({
                type: 'GET_EXERCISES',
                payload: data,
            })
        } catch(e) {
            // Sets loading to false
            stopLoading()
            setError()
            console.log(e.message)
        }

    }

    // Return a single exercise
    const selectedExercise = (exercises, selected) => {
        // Set loading to true
        setLoading()

        let data = {}
        
        // Filter through exercises for selected exercise
        exercises.filter(exercise => {
            if(exercise.name === selected){
                data = exercise
            }
        })

        // Set exercise data and set loading to false
        dispatch({
                    type: 'GET_EXERCISE',
                    payload: data,
                })
    }

    // Dispatches
    const setLoading = () => dispatch({type: 'SET_LOADING'})
    const stopLoading = () => dispatch({type: 'STOP_LOADING'})
    const setError = () => dispatch({type: 'SET_ERROR'})

    return <ExerciseContext.Provider value={{
        ...state,
        searchExercise,
        selectedExercise,
    }}>
        {children}
    </ExerciseContext.Provider> 

}

export default ExerciseContext