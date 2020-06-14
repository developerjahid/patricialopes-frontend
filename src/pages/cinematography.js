import React from 'react'
import Cineitem from '../components/cinematography/cineitem'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Cinematography = ({ data }) => {
    const { allSanityCinematography } = data
    const { edges: items } = data.allSanityCinematography

    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title='Home'
            />
            <section id='Cinematography' className='bg-white py-8'>
                <div class='container max-w-5xl mx-auto flex items-center flex-wrap pt-4 pb-12'>
                    {items.map(({ node: item }) => (
                        <Cineitem
                            title={item.title}
                            featuredImage={
                                item.featuredImage.asset.localFile
                                    .childImageSharp.fluid.src
                            }
                            altImage={item.featuredImage.alt}
                            category={item.category}
                            url={item.slug.current}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query allCine {
        allSanityCinematography {
            edges {
                node {
                    title
                    slug {
                        current
                    }
                    featuredImage {
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
                    category
                }
            }
        }
    }
`

export default Cinematography
