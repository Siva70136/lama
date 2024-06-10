import Menu from '../sideMenu';
import Nav2 from '../createNav2';
import './index.css'

const Widget = () => {


    return (
        <div className="Main-container">
            <Menu />
            <div className='app-container'>
                <Nav2 />
                <div className="">
                    <p className="head home-head">Configuration</p>
                </div>
                <div className='menu-container'>
                    <p className='top-link'>Genral</p>
                    <p className='top-link'>Display</p>
                    <p className='top-link'>Advanced</p>
                </div>

                <hr />

                <div className='form-container'>
                    <div className='form-group'>
                        <p className='label'>Chatbot Name</p>
                        <input type='text' placeholder='' className='field' />
                    </div>
                    <div className='form-group'>
                        <p className='label'>Welcome Message</p>
                        <input type='text' placeholder='' className='field' />
                    </div>
                    <div className='form-group'>
                        <p className='label'>Input Placeholder</p>
                        <input type='text' placeholder='' className='field' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widget;