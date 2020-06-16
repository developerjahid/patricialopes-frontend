import React from 'react'
import Layout from '../components/layout/layout'
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
        >
            <iframe
                title='vimeo-player'
                src='https://player.vimeo.com/video/161841346'
                width='640'
                height='360'
                frameBorder='0'
                allowFullscreen
            ></iframe>
        </section>
    </Layout>
)

export default Showreel
