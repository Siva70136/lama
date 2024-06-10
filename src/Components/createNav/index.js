import {Link} from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import logo from '../../logo.png'

import './index.css'

const Nav = () => {
    return (
        <div className="">
            <div className='navbar-container'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo' />
                    <p className='logo-title'>LAMA.</p>

                </div>
                <Link className="back-home" to='/home'>
                    <IoMdHome className="ico" />
                    Back to Home
                </Link>
                <div className='icon-container'>
                    <IoSettings className="ico" />
                    <FaBell className="ico" />
                </div>
            </div>
        </div>
    )
}

export default Nav;