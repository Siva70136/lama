import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { format } from 'date-fns';
import { CiCirclePlus } from "react-icons/ci";
import Popup from 'reactjs-popup'
import Nav from '../createNav';
import cuate from '../../images/cuate.png'
import './index.css'

const CreateHome = () => {
    const [project, setProject] = useState('');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('data');
        if (data != null) {
            setProjects(JSON.parse(data));
        }

    }, [])

    const onCreate = () => {
        const data = localStorage.getItem('data');
        const today = new Date();
        const fDate = format(today, 'dd MMM yy | HH:mm');
        console.log(fDate);
        if (data != null) {
            const info = JSON.parse(data);
            //console.log(info);
            localStorage.setItem('data', JSON.stringify([...info, { 'project': project, 'date': fDate }]))
        }
        else {
            const info = [{ 'project': project, 'date': fDate }];
            //console.log('else');
            localStorage.setItem('data', JSON.stringify(info));
        }
        const d = localStorage.getItem('data');
        setProjects(JSON.parse(d));
        setProject('');

    }

    return (
        <div className="">
            <Nav />
            <div className='main-home-container'>
                {projects.length === 0 ?
                    <div className="home-container">
                        <h1 className='head'>Create a New Project</h1>
                        <img src={cuate} className='home-image' alt='homeImage' />
                        <p className='home-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in</p>
                    </div> :
                    <div className="projects-container">
                        {projects.map((each, index) => {

                            return (
                                <Link to='/home' className="project-card" key={index}>
                                    <div className="project-name">
                                        <p className="project-letter">{each.project[0]}</p>
                                    </div>
                                    <div className="project-text">
                                        <p className="name">{each.project}</p>
                                        <p className="epi">4 Episodes</p>
                                        <p className="time">{each.date}</p>
                                    </div>

                                </Link>
                            )
                        })}
                    </div>
                }
                <div className="main-head">
                    {projects.length !== 0 &&
                        <div className="">
                            <p className="head">Projects</p>
                        </div>}
                    <div>
                        <div className='create-container'>
                            <CiCirclePlus className="ico plus" />
                            <p className='create-text'>
                                <Popup
                                    modal
                                    trigger={
                                        <div className='trigger-button cp'>
                                            Create a new Project
                                        </div>
                                    }
                                >
                                    {close => (
                                        <>
                                            <div className="confirmation">

                                                <div className="text-container">
                                                    <h1 className="">Create Project</h1>
                                                    <p className="label-text">Enter Project Name:</p>
                                                    <input type="text" className="project-name-input" placeholder="Type here" value={project} onChange={e => setProject(e.target.value)} required />
                                                </div>
                                                <div className="button-container">
                                                    <button
                                                        type="button"
                                                        className="button1 cross"
                                                        onClick={() => close()}
                                                        data-testid="close"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="cancel-button button1"
                                                        onClick={onCreate}
                                                    >
                                                        Create
                                                    </button>
                                                </div>
                                            </div>

                                        </>
                                    )}
                                </Popup>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateHome;