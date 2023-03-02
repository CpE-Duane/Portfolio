import React from 'react'
import './About.scss'
import Navbar from '../navbar/Navbar'
import 'animate.css';

import responsive from '../../assets/images/icons8-responsive-100.png'
import onTime from '../../assets/images/icons8-time-100.png'
import intuitiveImg from '../../assets/images/icons8-idea-100.png'
import shuttle from '../../assets/images/icons8-rocket-100.png'
import myImg from '../../assets/images/Me.jpeg'
import htmlImg from '../../assets/images/programming-languages/html-5.png'
import cssImg from '../../assets/images/programming-languages/css.png'
import jsImg from '../../assets/images/programming-languages/js.png'
import bootstrapImg from '../../assets/images/programming-languages/bootstrap.png'
import sassImg from '../../assets/images/programming-languages/sass.png'
import tsImg from '../../assets/images/programming-languages/typescript.png'
import angularImg from '../../assets/images/programming-languages/icons8-angularjs-48.png'
import reactImg from '../../assets/images/programming-languages/react.png'
import pythonImg from '../../assets/images/programming-languages/python.png'
import gitImg from '../../assets/images/programming-languages/git.png'
import githubImg from '../../assets/images/programming-languages/github.png'
import jsonImg from '../../assets/images/programming-languages/json-file.png'
import nodeJSImg from '../../assets/images/programming-languages/nodejs.png'
import mongoDbImg from '../../assets/images/programming-languages/mongodb.png'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact';

const About = () => {

    let services = [
        {
            img: onTime,
            h1: "Fast",
            p: "Fast load times and lag free interaction, my highest priority."
        },
        {
            img: responsive,
            h1: "Responsive",
            p: "My layouts will work on any device, big or small."
        },
        {
            img: intuitiveImg,
            h1: "Intuitive",
            p: "Strong preference for easy to use, intuitive UX/UI."
        },
        {
            img: shuttle,
            h1: "Dynamic",
            p: "Websites don't have to be static. I love making pages come to life."
        },
    ]

    let frontendSkills = [
        { name: "HTML", img: htmlImg, },
        { name: "CSS", img: cssImg,  },
        { name: "JS", img: jsImg,  },
        { name: "BOOTSTRAP", img: bootstrapImg,  },
        { name: "SASS", img: sassImg,  },
        { name: "TYPESCRIPT", img: tsImg, },
        { name: "ANGULAR", img: angularImg,  },
        { name: "REACT", img: reactImg, },
    ]

    let backendSkills = [
        { name: "PYTHON", img: pythonImg, },
        { name: "NODE JS", img: nodeJSImg },
        { name: "Mongo DB", img: mongoDbImg }
    ]

    let otherSkills = [
        { name: "JSON", img: jsonImg },
        { name: "GIT", img: gitImg },
        { name: "GITHUB", img: githubImg }
    ]

    return (
        <>
            <Navbar />
            <section className="about container" id='about'>
                <h1 className='text-center fw-bold animate__animated animate__fadeInLeftBig'>
                    About Me
                </h1>
                <div className="row pt-4 animate__animated animate__fadeInRightBig">
                    {
                        services.map((service, index) => {
                            return (
                                <div className="col-sm-6 col-lg-3" key={index}>
                                    <div className="about-services card text-center">
                                        <div className="about-services-img card-body mx-5 mx-sm-3 mx-md-5 mx-lg-2 mx-xl-5 rounded-3">
                                            <img src={service.img} alt="" className='img-fluid' />
                                        </div>
                                        <div className="card-footer bg-white border-0">
                                            <h4 className='fw-bold'>{service.h1}</h4>
                                            <p className='text-secondary'>{service.p}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="row align-items-center animate__animated animate__fadeInUpBig">
                    <div className="col-md-6">
                        <div className="card text-center border-0">
                            <div className="card-body">
                                <div className="profile
                                card-body">
                                    <img src={myImg} alt="" className='img-fluid rounded-circle' />
                                </div>
                                <h4 className='fw-bold my-3'>Who's this guy?</h4>
                                <p className='text-secondary'>
                                    I'm a <span className="fw-bold fst-italic">Quality Assurance(Automation)</span> for 6 months in Lee System Technology Ventures(Caloocan, Phlilippines)(Remote) using Python and Javascript and <span className="fw-bold fst-italic">Frontend Developer</span> for 4 months in Eigital(Remote) using Angular.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className='prog-language'>
                            <h1 className='fw-bold'>Frontend</h1>
                            <div className=''>
                                <div className="row mt-3">
                                    {
                                        frontendSkills.map((frontendSkill) => {
                                            return (
                                                <div className="col-4 col-md-3" key={frontendSkill.img}>
                                                    <img src={frontendSkill.img} alt="" className='img-fluid' />
                                                    <p>{frontendSkill.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    <h1 className='fw-bold mt-4 mb-3'>Backend</h1>
                                    {
                                        backendSkills.map((backendSkill) => {
                                            return (
                                                <div className="col-4" key={backendSkill.img}>
                                                    <img src={backendSkill.img} alt="" className='img-fluid' />
                                                    <p>{backendSkill.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    <h1 className='fw-bold mt-4  mb-3'>Other Skills</h1>
                                    {
                                        otherSkills.map((otherSkill) => {
                                            return (
                                                <div className="col-4" key={otherSkill.img}>
                                                    <img src={otherSkill.img} alt="" className='img-fluid' />
                                                    <p>{otherSkill.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Projects />
            <Contact />
        </>
    )
}

export default About