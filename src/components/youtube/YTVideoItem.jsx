import './YTVideoItem.css'

function YTVideoItem({video}) {
    const {title, author, duration, thumbnails, url} = video

    return(
        <div id="video-info-container">
            <div id="video-info-title">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={thumbnails[0].url} alt={title} title={title} width='200px'/>
                </a>
            </div>
            <div id="video-info-details">
                <p><strong>{title}</strong></p>
                <p>{author.name}</p>
                <p>{duration}</p>
            </div>
        </div>
    )
}

export default YTVideoItem