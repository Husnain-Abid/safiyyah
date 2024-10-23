import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ASSET_PATHS from '../constant'

export default function Header() {

    const [show, setShow] = useState(false)

    const imgRoute = ASSET_PATHS.IMG_URL



    return (
        <>
            <div className='header'>
                <div className='navbar'>
                    <div className='logo'>
                        <Link to="/">
                            <img src={`${imgRoute}/logo.svg`} alt='logo'/>

                        </Link>
                    </div>

                    <div className='nav-links'>
                        <i
                            className="fa fa-bars"
                            aria-hidden="true"
                            onClick={() => setShow(!show)}
                        />

                        <ul className={`links ${show ? 'show' : ''}`}>
                            <li><Link to="/" onClick={() => setShow(false)}>Home</Link></li>
                            <li><Link to="/about" onClick={() => setShow(false)}>About</Link></li>
                            {/* <li><Link to="/work" onClick={() => setShow(false)}>My Work </Link></li> */}
                            <li><Link to="/contact" onClick={() => setShow(false)}>Contact</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    )
}
