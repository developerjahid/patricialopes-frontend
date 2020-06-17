import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

function PhotographyPage() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title='Photography'
            />
            <section id='contact'>Hi I'm PhotographyPage</section>
        </Layout>
    )
}

export default PhotographyPage
