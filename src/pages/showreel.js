import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Showreel = () => (
    <Layout>
        <SEO
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            title='Home'
        />
        <section
            id='showreel'
            className='container w-full max-w-6xl mx-auto text-center'
        ></section>
    </Layout>
)

export default Showreel
