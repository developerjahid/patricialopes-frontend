import React from 'react'
import Cineitem from '../components/cinematography/cineitem'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const Cinematography = ({ data }) => {
    const { allSanityCinematography } = data
    const { edges: items } = data.allSanityCinematography

    return (
        <Layout>
            <SEO
                keywords={[`cine`, `tailwind`, `react`, `tailwindcss`]}
                title='Cinematography'
            />
            <section id='Cinematography' className='bg-white py-8'>
                <div className='container max-w-5xl mx-auto flex items-center flex-wrap pt-4 pb-12'>
                    {items.map(({ node: item }) => (
                        <Cineitem
                            title={item.title}
                            featuredImage={item.featuredImage.asset.url}
                            altImage={item.featuredImage.alt}
                            category={item.category}
                            url={item.slug.current}
                            key={item.id}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query pageQuery {
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
                            url
                        }
                    }
                    category
                    id
                }
            }
        }
    }
`

export default Cinematography
