import './YTVideoList.css'
import YTVideoItem from "./YTVideoItem"

function YTVideoList({videos}) {
    return(
        <div id='video-list-container'>
            <div id="video-list">
                {videos.map((video) => {
                    console.log('From video mapping: ' + video)
                    return <YTVideoItem key={video.id} video={video}/>
                })}
            </div>
        </div>
    )

}

export default YTVideoList