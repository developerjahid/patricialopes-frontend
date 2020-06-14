import React from 'react'
import { graphql } from 'gatsby'

const ComponentName = ({ data }) => {
    return <h1>{data.sanityCinematography.title}</h1>
}

export const query = graphql`
    {
        sanityCinematography {
            title
        }
    }
`

export default ComponentName
