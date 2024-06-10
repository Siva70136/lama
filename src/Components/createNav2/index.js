import { MdHome } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import flag from '../../images/flag.png'

import './index.css'

const Nav2 = () => {
    return (
        <div className="">
            <div className='navbar2-container'>
                <div className='logo-container2'>
                    <MdHome className='logo2' />
                    <p className='logo-title2'>/sample Project</p>
                </div>
         
                <div className='icon-container'>
                    <IoIosArrowDown className="down" />
                    <p className="lang">en</p>
                    <img src={flag} alt='flag' className="flag" />
                    <CiBellOn className="ico bell" />
                </div>
            </div>
        </div>
    )
}

export default Nav2;