import React from 'react'
import { Link, StaticQuery } from 'gatsby'

function Logo() {
    return (
        <StaticQuery
            query={graphql`
                query LogoQuery {
                    sanitySiteSettings {
                        logo {
                            alt
                            asset {
                                fluid(maxWidth: 200) {
                                    src
                                }
                            }
                        }
                    }
                }
            `}
            render={(data) => {
                const { logo } = data.sanitySiteSettings
                return (
                    <Link className='sm:pt-3 sm:pl-3 md:pt-0 md:pl-0' to='/'>
                        <img src={logo.asset.fluid.src} alt={logo.alt} />
                    </Link>
                )
            }}
        />
    )
}

export default Logo
