import './Exercise.css'
import returnIcon from '../components/layout/assets/return-icon.png'
import {useEffect, useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import Loading from '../components/layout/Loading'
import YTVideoList from '../components/youtube/YTVideoList'
import ExerciseContext from '../context/exercise/ExerciseContext'
import YoutubeContext from '../context/youtube/YoutubeContext'

function Exercise() {
    const {exercises, exercise, selectedExercise} = useContext(ExerciseContext)
    const {videos, searchVideos, loading} = useContext(YoutubeContext)


    const params = useParams()

    useEffect(() => {
        selectedExercise(exercises, params.exercise)
        searchVideos(params.exercise)
    }, [])

    const {name, bodyPart, target, equipment, gifUrl} = exercise
    const {items} = videos

    console.log('From items: ' + items)

    return(
        <div id='exercise-page-container'>
            <div id='exercise-info-title'>
                <h1>{name}</h1>
            </div>
            <div id='exercise-info-container'>
                <div id='exercise-info-img'>
                    <img src={gifUrl} alt={name} />
                </div>
                <div id='exercise-info-details'>
                    <div id='label-container'>
                        <p><span id='body-part-label' className='label'>{bodyPart}</span></p>
                        <p><span id='target-label' className='label'>{target}</span></p>
                        <p><span id='equipment-label' className='label'>{equipment}</span></p>
                    </div>
                </div>
            </div>
            
            <div>
                {
                    // Check loading status to load correct component
                    loading ? <Loading/> : <YTVideoList videos={items}/>
                }
            </div>
            <Link to='/'>
                <button id='return-link'>
                    <img src={returnIcon} alt="Return" />
                </button>
            </Link>
        </div>
    )

}

export default Exercise