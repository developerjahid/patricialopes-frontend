import React from 'react'
import PortableText from '../portableText'

const TextImage = ({ image, text }) => {
    return (
        <div className='container max-w-5xl mx-auto flex items-center flex-wrap rounded'>
            <img src={image.asset.url} alt={image.alt} />
            {text.map((singleText) => (
                <PortableText blocks={singleText} />
            ))}
        </div>
    )
}

export default TextImage
