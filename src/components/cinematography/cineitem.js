import React from 'react'
import { Link } from 'gatsby'

const Cineitem = (props) => {
    return (
        <div className='w-full md:w-1/3 xl:w-1/3 p-6 flex flex-col'>
            <Link to={props.url}>
                <img
                    className='hover:grow hover:shadow-lg'
                    src={props.featuredImage}
                    alt={props.altImage}
                />
                <div className='pt-3 flex items-center justify-between'>
                    <h2 className=''>{props.title}</h2>
                </div>
                <span className='pt-1 text-gray-900'>{props.category}</span>
            </Link>
        </div>
    )
}

export default Cineitem
