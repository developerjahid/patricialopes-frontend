import React from 'react'

const Video = ({ url }) => {
    return (
        <div className='container max-w-5xl mx-auto flex items-center flex-wrap rounded'>
            <iframe
                width='560'
                height='315'
                src={url}
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
            ></iframe>
        </div>
    )
}

export default Video
