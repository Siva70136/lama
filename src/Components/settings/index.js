import Menu from '../sideMenu';
import Nav2 from '../createNav2';
import profile from '../../images/profile.png'
import './index.css'

const Settings = () => {


    return (
        <div className="Main-container">
            <Menu />
            <div className='app-container'>
                <Nav2 />
                <div className="">
                    <p className="head home-head">Account Settings</p>
                </div>
                <div className='profile-container'>
                    <img src={profile} className='profile' alt='profile' />
                    <div className='input-container2'>
                        <p className='label'>User Name</p>
                        <input type='text' placeholder='User' className='input' />
                    </div>
                    <div className='input-container2'>
                        <p className='label'>Email</p>
                        <input type='text' placeholder='User@gmail.com' className='input' />
                    </div>

                </div>
                <div className="">
                    <p className="head home-head">Subscriptions</p>
                </div>
                <div className="sub">
                    <p className="cap">You are Currently on the <span className='under'>Ques AI Basic Plan</span></p>
                    <button type='button' className='upgrade'>Upgrade</button>
                </div>
            </div>
        </div>
    )
}

export default Settings;