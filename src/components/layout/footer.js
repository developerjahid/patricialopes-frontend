import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaImdb,
    FaLinkedinIn,
} from 'react-icons/fa'

function Footer() {
    return (
        <StaticQuery
            query={graphql`
                query FooterQuery {
                    sanitySiteSettings {
                        twitter
                        instagram
                        facebook
                        linkedin
                        imdb
                    }
                }
            `}
            render={(data) => {
                const {
                    twitter,
                    instagram,
                    linkedin,
                    imdb,
                    facebook,
                } = data.sanitySiteSettings
                return (
                    <footer className=''>
                        <div className='max-w-4xl p-3 mx-auto text-sm'>
                            <div className='flex justify-center'>
                                <Link to={instagram}>
                                    <FaInstagram size={20} />
                                </Link>
                                <Link to={twitter}>
                                    <FaTwitter size={20} />
                                </Link>
                                <Link to={linkedin}>
                                    <FaLinkedinIn size={20} />
                                </Link>
                                <Link to={imdb}>
                                    <FaImdb size={20} />
                                </Link>
                                <Link to={facebook}>
                                    <FaFacebookF size={20} />
                                </Link>
                            </div>
                            <div className='flex justify-center'>
                                <p>
                                    © 2020. By {` `}
                                    <Link
                                        className='font-bold no-underline'
                                        href='/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Patricia Lopes
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </footer>
                )
            }}
        />
    )
}

export default Footer
