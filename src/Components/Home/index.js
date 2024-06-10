import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { HiOutlineXMark } from "react-icons/hi2";
import Popup from 'reactjs-popup'

import Menu from '../sideMenu';
import Nav2 from '../createNav2';
import cloud_upload from '../../images/cloud_upload.png'
import Frame1 from '../../images/Frame1.png';
import Frame2 from '../../images/Frame2.png';
import image1 from '../../images/image1.png';
import './index.css'

const Home = () => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [videos, setVideos] = useState('');

    useEffect(() => {
        const data = localStorage.getItem('videos');
        if (data != null) {
            //const d = localStorage.getItem('data');
            setVideos(JSON.parse(data));

        }

    }, [])

    const onUpload = () => {
        const data = localStorage.getItem('videos');
        const today = new Date();
        const fDate = format(today, 'dd MMM yy | HH:mm');
        //console.log(fDate);
        if (data != null) {
            const info = JSON.parse(data);
            localStorage.setItem('videos', JSON.stringify([...info, { 'name': name, 'date': fDate }]))
        }
        else {
            const info = [{ 'name': name, 'date': fDate }];
            localStorage.setItem('videos', JSON.stringify(info));
        }
        const d = localStorage.getItem('videos');
        setVideos(JSON.parse(d));
        setName('');
        setLink('');
        console.log(videos);

    }

    return (
        <div className="Main-container">
            <Menu />
            <div className='app-container'>
                <Nav2 />
                <div className="">
                    <p className="head home-head">Upload</p>
                </div>
                <div className='cards-container'>
                    <div className="banner-card">
                        <div className="project-nam">
                            <img src={Frame1} alt='youtube' className='image' />
                        </div>
                        <div className="project-text">
                            <p className="name banner-name">Upload</p>
                            <p className="epi">Youtube Video</p>
                        </div>
                    </div>
                    <div className="banner-card">
                        <div className="project-nam">
                            <img src={Frame2} alt='youtube' className='image' />
                        </div>
                        <div className="project-text">
                            <p className="name banner-name">Upload</p>
                            <p className="epi">Spotify Podcast</p>
                        </div>
                    </div>
                    <div className="banner-card">
                        <div className="project-nam">
                            <img src={image1} alt='youtube' className='image' />
                        </div>
                        <div className="project-text">
                            <p className="name banner-name">Upload from</p>
                            <p className="epi">Rss feed</p>
                        </div>
                    </div>
                </div>
                {videos.length == 0 ? <>
                    <div className='cards-container'>
                        <div className="banner-card">
                            <div className="project-nam">
                                <img src={Frame1} alt='youtube' className='image' />
                            </div>
                            <div className="project-text">
                                <p className="name banner-name">Upload</p>
                                <p className="epi">Youtube Video</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <div className="project-nam">
                                <img src={Frame2} alt='youtube' className='image' />
                            </div>
                            <div className="project-text">
                                <p className="name banner-name">Upload</p>
                                <p className="epi">Spotify Podcast</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <div className="project-nam">
                                <img src={image1} alt='youtube' className='image' />
                            </div>
                            <div className="project-text">
                                <p className="name banner-name">Upload from</p>
                                <p className="epi">Rss feed</p>
                            </div>
                        </div>
                    </div>
                    <p className='or'>or</p>
                    <div className="upload-container">
                        <img src={cloud_upload} className='cloud-image' alt='cloud-image' />
                        <h1 className='uplod-head'>Select a file or drag and drop here (Podcast Media or Transcription Text)</h1>

                        <p className='upload-desc'>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
                        <p className=''>
                            <Popup
                                modal
                                trigger={
                                    <div className='trigger-button sf'>
                                        Select File
                                    </div>
                                }
                            >
                                {close => (
                                    <>
                                        <div className="confirmation">
                                            <button
                                                type="button"
                                                className="cross"
                                                onClick={() => close()}
                                                data-testid="close"
                                            >
                                                <HiOutlineXMark className='x' />
                                            </button>

                                            <div className="text-container">
                                                <h1 className="pop-head">
                                                    <img src={Frame1} alt='youtube' className='pop-image' />
                                                    Upload From Youtube</h1>
                                                <p className="label-text">Name:</p>
                                                <input type="text" className="project-name-input" value={name} onChange={e => setName(e.target.value)} required />
                                                <p className="label-text">Link:</p>
                                                <input type="text" className="project-name-input" value={link} onChange={e => setLink(e.target.value)} required />
                                            </div>
                                            <div className="button-container">
                                                <button
                                                    type="button"
                                                    className="cancel-button button1"
                                                    onClick={onUpload}
                                                >
                                                    Upload
                                                </button>
                                            </div>
                                        </div>

                                    </>
                                )}
                            </Popup>
                        </p>
                    </div>
                </> :
                    <>
                        <div className='select-container'>
                            <p className='head home-head videos'>Upload</p>
                            <div className='select'>
                                <Popup
                                    modal
                                    trigger={
                                        <div className='trigger-button sf'>
                                            Select File
                                        </div>
                                    }
                                >
                                    {close => (
                                        <>
                                            <div className="confirmation">
                                                <button
                                                    type="button"
                                                    className="cross"
                                                    onClick={() => close()}
                                                    data-testid="close"
                                                >
                                                    <HiOutlineXMark className='x' />
                                                </button>

                                                <div className="text-container">
                                                    <h1 className="pop-head">
                                                        <img src={Frame1} alt='youtube' className='pop-image' />
                                                        Upload From Youtube</h1>
                                                    <p className="label-text">Name:</p>
                                                    <input type="text" className="project-name-input" value={name} onChange={e => setName(e.target.value)} required />
                                                    <p className="label-text">Link:</p>
                                                    <input type="text" className="project-name-input" value={link} onChange={e => setLink(e.target.value)} required />
                                                </div>
                                                <div className="button-container">
                                                    <button
                                                        type="button"
                                                        className="cancel-button button1"
                                                        onClick={onUpload}
                                                    >
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>

                                        </>
                                    )}
                                </Popup>
                            </div>
                        </div>
                        <div className='rows'>
                            <div className='row'>
                                <p className='head1'>Name</p>
                                <p className='head1'>Upload Date& Time</p>
                                <p className='head1'>status</p>
                                <p className='head1'>Actions</p>
                            </div>
                            {videos.map((each, index) => {
                                return (
                                    <div className='row' key={index}>
                                        <p className='sname'>{each.name}</p>
                                        <p className='sdate'>{each.date}</p>
                                        <p className='status'>Done</p>
                                        <p className='action'>
                                            <div className="">
                                                <button
                                                    type="button"
                                                    className="button"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="button"
                                                   
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Home;