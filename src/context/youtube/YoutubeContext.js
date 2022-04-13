import { createContext, useReducer } from "react"
import youtubeReducer from "./YoutubeReducer"

const YoutubeContext = createContext()

// Env variables 
// API Key
const YOUTUBE_SR_KEY = process.env.REACT_APP_YOUTUBE_SR_KEY

export const YoutubeProvider = ({children}) => {
    const initialState = {
        videos: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(youtubeReducer, initialState)

    // Get list of videos
    const searchVideos = async (params) => {
        // Set loading to true
        setLoading()

        // Api OPTIONS method request
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
                'X-RapidAPI-Key': `${YOUTUBE_SR_KEY}`
            }
        };
        
        try {
            // Fetch and set data
            const res = await fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=instructions+to+${params}`, options)
            
            // Checks response for errors
            if(!res.ok) {
                throw new Error(res.statusText)
            }

            const data = await res.json()

            // Set videos data and set loading to false
            dispatch({
                type: 'GET_VIDEOS',
                payload: data
            })  

        } catch(e) {
            // Check error type
            if(e.message === 'AbortError'){
                console.log('Fetch Aborted')
            } else {
                // Sets loading to false
                stopLoading()
                setError()
                console.log(e.message)
            }
        }

    }

    // Dispatches
    const setLoading = () => {dispatch({type: 'SET_LOADING'})} 
    const stopLoading = () => {dispatch({type: 'STOP_LOADING'})}
    const setError = () => {dispatch({type: 'SET_ERROR'})}

    return <YoutubeContext.Provider value={{
        ...state,
        searchVideos,
    }}>
        {children}
    </YoutubeContext.Provider>
}

export default YoutubeContext