import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout/layout'
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

                    id
                }

                alt
            }
            category
            client
            directors
            dops
            production
            imdb
            seo {
                seo_title
                meta_description
                focus_synonyms
                focus_keyword
            }
            image {
                asset {
                    url
                }
            }
        }
    }
`

const ProjectTemplate = ({ data }) => {
    const {
        fragments: images,
        directors: directors,
        dops: dops,
        production: productions,
        seo: seo,
        image: image,
    } = data.sanityCinematography

    const HaveSeo = () => {
        if (seo) {
            return (
                <SEO
                    keywords={seo.focus_keyword}
                    synonyms={seo.focus_synonyms}
                    image={image.asset.url}
                    title={seo.seo_title}
                    description={seo.meta_description}
                />
            )
        } else {
            return <SEO title={data.sanityCinematography.title} />
        }
    }

    return (
        <Layout>
            <HaveSeo />
            <section id='cinematography-templete' className='bg-white py-8'>
                <div className='container max-w-5xl mx-auto flex items-center flex-wrap pt-4 pb-12'>
                    <Link to='/cinematography'>
                        <FaAngleLeft size={30} />
                    </Link>

                    {images.map((image) => (
                        <img
                            src={
                                image.asset.localFile.childImageSharp.fluid.src
                            }
                            alt={image.alt}
                            key={image.asset.id}
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
