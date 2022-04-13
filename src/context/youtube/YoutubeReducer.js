const youtubeReducer = (state, action) => {
    switch(action.type) {
        case 'GET_VIDEOS':
            return {
                ...state,
                videos: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'STOP_LOADING':
            return {
                ...state,
                loading: false
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: 'Could not load data'
            }
        default:
            return state
    }
}

export default youtubeReducer