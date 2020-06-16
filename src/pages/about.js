import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

function AboutPage() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title='About'
            />

            <section
                id='about'
                className='flex flex-col items-center md:flex-row'
            >
                Hi iam about
            </section>
        </Layout>
    )
}

export default AboutPage
