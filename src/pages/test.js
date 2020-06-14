import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Test = ({ data }) => (
    <Layout>
        <article>
            <h2>{data.allSanityCinematography.nodes.title}</h2>
        </article>
    </Layout>
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
