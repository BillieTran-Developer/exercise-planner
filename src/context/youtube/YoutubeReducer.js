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
        default:
            return state
    }
}

export default youtubeReducer