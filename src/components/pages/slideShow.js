import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function Slideshow(props) {
    return (
        <div className='container max-w-5xl mx-auto flex items-center flex-wrap rounded'>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                showIndicators={false}
            >
                {props.images.map((image) => (
                    <img src={image.asset.url} alt={image.alt} />
                ))}
            </Carousel>
        </div>
    )
}

export default Slideshow
