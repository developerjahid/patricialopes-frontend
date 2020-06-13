import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { FaInstagram } from 'react-icons/fa'

import Header from './header'

function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen font-sans text-gray-900'>
            <Header />

            <main>{children}</main>

            <footer className=''>
                <div className='max-w-4xl p-3 mx-auto text-sm'>
                    <div className='flex justify-center'>
                        <Link to='/'>
                            <FaInstagram />
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
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
