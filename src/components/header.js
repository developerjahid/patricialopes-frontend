import { Link } from 'gatsby'
import React, { useState } from 'react'
import Logo from '../images/logo.png'

function Header() {
    const [isExpanded, toggleExpansion] = useState(false)
    return (
        <header>
            <div className='flex flex-wrap items-center justify-between max-w-4xl p-4 sm:p-0 mx-auto md:p-8'>
                <nav
                    className={`${
                        isExpanded ? `block` : `hidden`
                    } md:block md:order-last sm:order-first md:flex md:items-center w-full md:w-auto md:bg-white`}
                >
                    {[
                        {
                            route: `/cinematography`,
                            title: `Cinematography`,
                        },
                        {
                            route: `/photography`,
                            title: `Photography`,
                        },
                        {
                            route: `/about`,
                            title: `About Me`,
                        },
                        {
                            route: `/contact`,
                            title: `Contact`,
                        },
                    ].map((link) => (
                        <Link
                            className='block mt-4 text-black text-center no-underline md:inline-block md:mt-0 md:ml-6'
                            key={link.title}
                            to={link.route}
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <Link className='sm:pt-3 sm:pl-3' to='/'>
                    <img src={Logo} alt='' />
                </Link>

                <div className='sm:pt-3 sm:pr-3'>
                    <button
                        className='flex items-center block px-3 py-2 text-black border border-black rounded md:hidden'
                        onClick={() => toggleExpansion(!isExpanded)}
                    >
                        <svg
                            className='w-3 h-3 fill-current'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <title>Menu</title>
                            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
