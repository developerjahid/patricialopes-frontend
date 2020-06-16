import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

function ContactPage() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title='Contact'
            />
            <section id='contact'>Hi I'm contact</section>
        </Layout>
    )
}

export default ContactPage
