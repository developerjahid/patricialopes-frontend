import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import '../css/app.css'

import Sli from '../images/sli.jpg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Index = () => (
    <Layout>
        <SEO
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            title='Home'
        />
        <section id='index' className='text-center'>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                showIndicators={false}
            >
                <div>
                    <img alt='' src={Sli} />
                </div>
                <div>
                    <img alt='' src={Sli} />
                </div>
            </Carousel>
        </section>
    </Layout>
)

export default Index
