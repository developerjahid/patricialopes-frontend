import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import Sli from '../images/sli.png'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
    return (
        <div className='h-screen overflow-hidden'>
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
                            <img alt='' src={Sli} className='h-64' />
                        </div>
                        <div>
                            <img alt='' src={Sli} className='h-64' />
                        </div>
                    </Carousel>
                </section>
            </Layout>
        </div>
    )
}

export default IndexPage
