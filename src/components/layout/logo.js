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
                                localFile {
                                    childImageSharp {
                                        fluid {
                                            src
                                        }
                                    }
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
                        <img
                            src={Logo.asset.loclFile.childImageSharp.fluid.src}
                            alt={logo.alt}
                        />
                    </Link>
                )
            }}
        />
    )
}

export default Logo
