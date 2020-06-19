import React from 'react'

const Gird = ({ images }) => {
    return (
        <div className='container max-w-5xl mx-auto flex items-center flex-wrap rounded'>
            <div class='flex flex-wrap -mx-5 overflow-hidden sm:-mx-4 md:-mx-1 lg:-mx-4 xl:-mx-4'>
                {images.map((image) => (
                    <div class='my-5 px-5 w-1/3 overflow-hidden sm:my-4 sm:px-4 sm:w-full md:my-1 md:px-1 md:w-full lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3'>
                        <img src={image.asset.url} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gird
