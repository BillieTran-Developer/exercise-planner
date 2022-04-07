import './ExerciseResults.css'
import {useContext} from 'react'
import Loading from '../layout/Loading'
import ExerciseItem from './ExerciseItem'
import ExerciseContext from '../../context/exercise/ExerciseContext'

function ExerciseResults() {
    const {exercises, loading} = useContext(ExerciseContext)

    if(!loading){
        return(
            <div id='cards-container'>
                <div id='cards-results-title'>
                    <p>Search Results:</p>
                </div>
                <div id='cards-results-container'>
                    {exercises.map(exercise => {
                        return <ExerciseItem key={exercise.id} exercise={exercise}/>
                    })}
                </div>
            </div>
        )
       
    } else {
        return <Loading/>
    }
}

export default ExerciseResults