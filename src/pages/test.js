import React from 'react'
import { graphql } from 'gatsby'

const Test = ({ data }) => (
    <article>
        <h2>{data.allSanityCinematography.nodes.title}</h2>
    </article>
)

export default Test

export const query = graphql`
    query MyQuery {
        allSanityCinematography {
            totalCount
            nodes {
                title
            }
        }
    }
`
