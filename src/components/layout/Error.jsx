import './Error.css'

function Error({error}){
    return(
        <div id='error-container'>
            <p>
                {error}
            </p>
        </div>
    )
}

export default Error