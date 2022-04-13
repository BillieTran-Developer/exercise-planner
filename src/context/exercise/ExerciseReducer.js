const exerciseReducer = (state, action) => {
    switch(action.type) {
        case 'GET_EXERCISES':
            return{
                ...state,
                exercises: action.payload,
                loading: false
            }
        case 'GET_EXERCISE':
            return{
                ...state,
                exercise: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: true
            }
        case 'STOP_LOADING':
            return{
                ...state,
                loading: false
            }
        case 'SET_ERROR':
            return{
                ...state,
                error: 'Could not load data'
            }
        default:
            return state
    }
}

export default exerciseReducer