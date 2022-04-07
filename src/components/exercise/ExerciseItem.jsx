import './ExerciseItem.css'

import {Link} from 'react-router-dom'

function ExerciseItem({exercise}) {
    return(
        <div id='exercise-card'>
            <Link to={`/exercise/${exercise.name}`} >
                <div id='exercise-card-muscle'>
                    <p>
                        {exercise.bodyPart}
                    </p>
                </div>
                <img src={exercise.gifUrl} alt={exercise.name} />
                <div id='exercise-card-info'>
                    <p>
                        {exercise.name}
                    </p>
                </div>
                <div id='prevent-overlap'>

                </div>
                <div id='exercise-card-equipment'>
                    <p>
                        {exercise.equipment}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default ExerciseItem