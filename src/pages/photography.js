import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function PhotographyPage() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title='Contact'
            />
            <section id='contact'>Hi I'm PhotographyPage</section>
        </Layout>
    )
}

export default PhotographyPage
