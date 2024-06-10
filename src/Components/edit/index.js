import { useEffect,useState } from 'react';
import Menu from '../sideMenu';
import Nav2 from '../createNav2';
import './index.css'
import { useParams } from 'react-router-dom';

const Edit = (props) => {
    const [desc,setDesc]=useState('');
    let {id}=useParams();
    //console.log(id);
    useEffect(()=>{
        const res=localStorage.getItem('videos');
        const data=JSON.parse(res);
        setDesc(data[id].desc);
    })

    return (
        <div className="Main-container">
            <Menu />
            <div className='app-container'>
                <Nav2 />
                <div className="">
                    <p className="head home-head">Edit Transcription</p>
                </div>
                <div className='textarea-container'>
                    <textarea className='textarea' value={desc}></textarea>
                </div>
            </div>
        </div>
    )
}

export default Edit;