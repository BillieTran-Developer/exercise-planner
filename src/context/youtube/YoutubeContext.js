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
    }

    const [state, dispatch] = useReducer(youtubeReducer, initialState)

    // Get list of videos
    const searchVideos = async (text) => {
        setLoading()
        
        const params = text

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
                'X-RapidAPI-Key': `${YOUTUBE_SR_KEY}`
            }
        };
        
        const res = await fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=instructions+to+${params}`, options)

        const data = await res.json()

        dispatch({
            type: 'GET_VIDEOS',
            payload: data
        })  
    }

    // Set Loading
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    } 

    return <YoutubeContext.Provider value={{
        ...state,
        searchVideos,
    }}>
        {children}
    </YoutubeContext.Provider>
}

export default YoutubeContext