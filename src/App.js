import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Context
import { ExerciseProvider } from './context/exercise/ExerciseContext'
import { YoutubeProvider } from './context/youtube/YoutubeContext'
// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
// Pages
import Home from './pages/Home'
import About from './pages/About'
import Exercise from './pages/Exercise'

function App() {
    return(
        <div id='page-container'>
            <ExerciseProvider>
                <YoutubeProvider>
                    <div className='main-container'>
                        <Router>
                            <div id='nav-bar'>
                                <Navbar />
                            </div>
                            <div id='main-content'>
                                <Routes>
                                    <Route exact path='/' element={<Home/>} />
                                    <Route path='/about' element={< About/>} />
                                    <Route path='/exercise/:exercise' element={<Exercise/>}/>
                                </Routes>
                            </div>
                        </Router>
                        <div id='footer'>
                            <Footer/>
                        </div>
                    </div>
                </YoutubeProvider>
            </ExerciseProvider>
        </div>
    )
}

export default App