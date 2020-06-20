import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({ url, posterImage }) => {
    return (
        <div className='mx-auto flex items-center flex-wrap rounded'>
            <ReactPlayer
                url={url}
                width='100%'
                height='500px'
                playing
                playIcon={<button>Play</button>}
                light={posterImage.asset.url}
            />
        </div>
    )
}

export default Video
