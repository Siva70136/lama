import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LuPieChart } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbArrowBadgeRight } from "react-icons/tb";
import { MenuContext } from '../../context/themecontext';
import logo from '../../logo.png'
import './index.css'

const Menu = () => {
    const { activeTab, onChange } = useContext(MenuContext);

    return (
        <div className="side-menu">
            <div className='menu-section'>
                <Link to='/' onClick={() => onChange('/')} className='option'>
                    <div className='logo-container'>
                        <img src={logo} alt='logo' className='logo' />
                        <p className='logo-title'>LAMA.</p>

                    </div>
                </Link>
                <Link to='/projects' onClick={() => onChange('projects')} className='option'>
                    <div className={`${activeTab === 'home' ? 'active' : ''} option`}>
                        <LuPieChart className="icon" />
                        <p className='option-name'>Projects</p>
                    </div>
                </Link>
                <Link to='/widget' onClick={() => onChange('widget')} className='option'>
                    <div className={`${activeTab === 'widget' ? 'active' : ''} option`}>
                        <TbArrowBadgeRight className="icon" />
                        <p className='option-name'>Widget Configuration</p>
                    </div>
                </Link>

                <div className={` option`}>
                    <AiOutlineSchedule className="icon" />
                    <p className='option-name'>Deployment</p>
                </div>
                <div className={` option`}>
                    <CgProfile className="icon" />
                    <p className='option-name'>Pricing</p>
                </div>

                <hr className='last' />
            </div>

            <div className='bottom'>
                <hr className='last' />
                <Link to='/settings' onClick={() => onChange('settings')} className='option' >
                    <div className={`${activeTab === 'settings' ? 'active' : ''} option last`}>
                        <IoSettingsOutline className="icon" />
                        <p className='option-name'>Settings</p>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Menu;