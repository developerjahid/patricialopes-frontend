import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { FaAngleLeft } from 'react-icons/fa'

export const query = graphql`
    query cinematoTemplateQuery($id: String!) {
        sanityCinematography(id: { eq: $id }) {
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
                alt
            }
            category
            client
            directors
            dops
            production
            imdb
        }
    }
`

const ProjectTemplate = ({ data }) => {
    const {
        fragments: images,
        directors: directors,
        dops: dops,
        production: productions,
    } = data.sanityCinematography
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title='Home'
            />
            <section id='cinematography-templete' className='bg-white py-8'>
                <div class='container max-w-5xl mx-auto flex items-center flex-wrap pt-4 pb-12'>
                    <Link to='/cinematography'>
                        <FaAngleLeft size={30} />
                    </Link>

                    {images.map((image) => (
                        <img
                            src={
                                image.asset.localFile.childImageSharp.fluid.src
                            }
                            alt={image.alt}
                        />
                    ))}
                    <div>
                        <span>{data.sanityCinematography.title}</span>
                        <br />
                        <span>directors: </span>
                        {directors.map((director) => (
                            <span>{director}</span>
                        ))}

                        <br />
                        <span>dops: </span>
                        {dops.map((dop) => (
                            <span> {dop}</span>
                        ))}
                        <br />
                        <span>productions: </span>
                        {productions.map((production) => (
                            <span>{production}</span>
                        ))}
                        <br />
                        <span>client: </span>
                        <span>{data.sanityCinematography.client}</span>
                        <span>imdb</span>
                        <br />
                        <Link to={data.sanityCinematography.imdb}>imdb</Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ProjectTemplate
