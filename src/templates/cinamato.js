import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const TempleteQuery = graphql`
    query ProjectTemplateQuery($id: String!) {
        post: sanityCinematography(id: { eq: $id }) {
            id
            title
            featuredImage {
                asset {
                    localFile {
                        childImageSharp {
                            fluid {
                                src
                            }
                        }
                    }
                }
                alt
            }
            category
            client
            directors
            dops
            production
            fragments {
                asset {
                    localFile {
                        childImageSharp {
                            fluid {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`

const BlogPostTemplate = (props) => {
    const { data, errors } = props
    const post = data && data.post
    return (
        <Layout>
            <h1>{post.id}</h1>
        </Layout>
    )
}

export default BlogPostTemplate
