import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

export const query = graphql`
    query pageTempleteQuery($id: String!) {
        sanityPage(id: { eq: $id }) {
            id
            content {
                ... on SanitySlideshow {
                    _key
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

function PagesTemplate({ data }) {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title='Home'
            />
            <section id='pages-templete' className='bg-white py-8'>
                {data.sanityPage.content.map((item) =>
                    item.images.map((image) => <h2>{image.alt}</h2>)
                )}
            </section>
        </Layout>
    )
}

export default PagesTemplate
