import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export const slideQuery = graphql`
    query pageSlideTempleteQuery($id: String!) {
        sanityPage(id: { eq: $id }) {
            title
            id
            content {
                ... on SanitySlideshow {
                    _key
                    _type
                    images {
                        alt
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
        }
    }
`

function Slideshow() {
    return (
        <StaticQuery
            query={slideQuery}
            render={(data) => {
                return (
                    <section id='pages-templete' className='bg-white py-8'>
                        {data.sanityPage.content.map((image) => (
                            <h1>{image._key}</h1>
                        ))}
                    </section>
                )
            }}
        />
    )
}

export default Slideshow
