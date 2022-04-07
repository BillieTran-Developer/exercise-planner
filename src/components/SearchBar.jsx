import './SearchBar.css'

import {useContext, useState} from 'react'
import ExerciseContext from '../context/exercise/ExerciseContext'

function SearchBar() {
    const [text, setText] = useState('')

    const {searchExercise} = useContext(ExerciseContext)

    const placeholder = 'Please enter search'

    // User input handler
    const handleChange = (e) => {
        setText(e.target.value)
    }

    // Submit input handler
    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === '') {
            alert('Please enter text')
        } else {
            searchExercise(text)
            setText('')
        }
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder={placeholder} value={text} onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar