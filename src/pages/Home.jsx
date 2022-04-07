import './Home.css'
import background from '../components/layout/assets/gym-bg.jpg'
import SearchBar from "../components/SearchBar"
import ExerciseResults from "../components/exercise/ExerciseResults"

function Home() {
    return(
        <>
            <div id='search-container'>
                <img src={background} alt="Background image of a man doing mountain climbers" />
                <div id='search-container-bar'>
                    <SearchBar/>
                </div>
            </div>
            <div id='exercise-results'>
                <ExerciseResults/>
            </div>
        </>
    )
}

export default Home