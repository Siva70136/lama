import Menu from '../sideMenu';
import Nav2 from '../createNav2';
import './index.css'

const Edit = () => {


    return (
        <div className="Main-container">
            <Menu />
            <div className='app-container'>
                <Nav2 />
                <div className="">
                    <p className="head home-head">Edit Transcription</p>
                </div>
                <div className='profile-container'>
                    
                </div>
            </div>
        </div>
    )
}

export default Edit;