import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <div className="s">S</div>
                <div className="o">O</div>
                <div className="c">C</div>
                <div className="o">O</div>
            </div>
            <div className="navbar-components">
                <li>Ticket</li>
                <li>Line Up</li>
                <li>Stoge</li>
                <li>Partner</li>
            </div>
            <div className="navbar-lang-signup">
                <div className="navbar-lang">
                    <img src="" alt="" />
                    <p>Eng</p>
                </div>
                <div className="seperator">|</div>
                <div className="navbar-signup">
                    <img src="" alt="" />
                    <p>Sign Up</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar
