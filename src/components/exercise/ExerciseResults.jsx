import './ExerciseResults.css'
import {useContext} from 'react'
import Loading from '../layout/Loading'
import Error from '../layout/Error'
import ExerciseItem from './ExerciseItem'
import ExerciseContext from '../../context/exercise/ExerciseContext'

function ExerciseResults() {
    const {exercises, loading, error} = useContext(ExerciseContext)

    return(
        <>
            {
                loading && <Loading/>
            }
            {
                error && <Error/>
            }
            {
                exercises && (
                    <div id='results-container'>
                        {
                            exercises.length === 0 ? null : 
                            (<div id='cards-results-title'>
                                <p>Search Results:</p>
                            </div>)
                        }  
                        <div id='cards-results-container'>
                            {exercises.map(exercise => {
                                return <ExerciseItem key={exercise.id} exercise={exercise}/>
                            })}
                        </div>
                    </div>
                )
            }
        </>
    ) 
}

export default ExerciseResults