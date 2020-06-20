import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage, getFixedGatsbyImage} from 'gatsby-source-sanity'


const Video = ({ url, posterImage }) => {
    const sanityConfig = {projectId: '7nedemsk', dataset: 'production'}

    return (
        <div className='mx-auto flex items-center flex-wrap rounded'>
            <Img fixed={ getFixedGatsbyImage(posterImage.asset.id, {width: 1900, height: 800}, sanityConfig)} />
            <iframe
                width='1900'
                height='800'
                src={url}
                frameborder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
            ></iframe>
        </div>
    )
}

export default Video
