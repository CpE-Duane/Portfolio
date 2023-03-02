import React, { useEffect, useState } from 'react'
import './Projects.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

import adviceGenerator from '../../assets/images/projects/advice-generator.png'
import contactApp from '../../assets/images/projects/contact-app.png'
import crowdFunding from '../../assets/images/projects/crowd-funding-product-page.jpg'
import easyBank from '../../assets/images/projects/easy-bank-landing-page.jpg'
import eCommerce from '../../assets/images/projects/ecommerce-product-page.jpg'
import interactivePricing from '../../assets/images/projects/interactive-pricing.jpg'
import ipAddressTracker from '../../assets/images/projects/ip-address-tracker.jpg'
import multiForm from '../../assets/images/projects/multi-form.png'
import newsHomepage from '../../assets/images/projects/news-homepage.png'
import socialMediaDashboard from '../../assets/images/projects/social-media-dashboard.jpg'
import staticJobListing from '../../assets/images/projects/static-job-listing.jpg'
import tipCalculator from '../../assets/images/projects/tip-calculator.jpg'

const Projects = () => {

    let projects = [
        { name: "Advice Generator", img: adviceGenerator, type: "react/angular" },
        { name: "Contact App with JSON Server", img: contactApp, type: "react/angular" },
        { name: "Crowd Funding Product Page", img: crowdFunding, type: "coming soon" },
        { name: "Easy Bank Landing Page", img: easyBank, type: "coming soon" },
        { name: "Ecommerce Product Page", img: eCommerce, type: "coming soon" },
        { name: "Interactive Pricing", img: interactivePricing, type: "coming soon" },
        { name: "Ip Address Tracker", img: ipAddressTracker, type: "coming soon" },
        { name: "Multi Form", img: multiForm, type: "react/angular" },
        { name: "News Homepage", img: newsHomepage, type: "html/css" },
        { name: "Social Media Dashboard", img: socialMediaDashboard, type: "coming soon" },
        { name: "Static Job Listing", img: staticJobListing, type: "coming soon" },
        { name: "Tip Calculator", img: tipCalculator, type: "coming soon" },
    ]

    const [selectedProjects, setSelectedProjects] = useState(projects);
    const [type, setType] = useState("");

    const filterByType = (filteredData) => {
        if (!type) {
            return filteredData;
        }
        const filteredProjects = filteredData.filter((project) =>
            project.type === type
        );
        return filteredProjects;
    };

    const selectType = (event) => {
        setSelectedProjects([])
        const inputType = (event.target.id);

        if (inputType === type) {
            setType("");
        } else {
            setType(inputType);
        }
    };

    useEffect(() => {
        var filteredData = filterByType(projects);
        setSelectedProjects(filteredData);
    }, [type]);

    useEffect(() => {
        AOS.init();
    }, [])


    let goToProject = (project) => {
        if (project.name === "Multi Form") {
            window.open("https://cpe-duane.github.io/multi-step-form/", "_blank")
        }
        if (project.name === "Advice Generator") {
            window.open("https://cpe-duane.github.io/advice-generator/", "_blank")
        }
        if (project.name === "News Homepage") {
            window.open("https://cpe-duane.github.io/news-homepage/", "_blank")
        }
    }

    return (
        <section className='projects container' id='projects'>
            <h1 className='text-center fw-bold' data-aos="fade-left" data-aos-duration="1000">
                Projects
            </h1>
            <div className='row my-4 d-flex justify-content-center' onClick={selectType} data-aos="fade-right" data-aos-duration="1000">
                <div className="col-12 col-sm-6 col-lg-3 col-xl-2 d-grid">
                    <button className={`btn ${type === "" ? "active-option" : "option"}`}
                        id="">
                        ALL
                    </button>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 col-xl-2 d-grid">
                    <button className={`btn ${type === "html/css" ? "active-option" : "option"}`}
                        id="html/css">
                        HTML / CSS
                    </button>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 col-xl-2 d-grid">
                    <button className={`btn ${type === "react/angular" ? "active-option" : "option"}`}
                        id="react/angular">
                        REACT / ANGULAR
                    </button>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 col-xl-2 d-grid">
                    <button className={`btn ${type === "coming soon" ? "active-option" : "option"}`}
                        id="coming soon">
                        COMING SOON
                    </button>
                </div>
            </div>

            <div className="row" data-aos="fade-up" data-aos-duration="1000">
                {
                    selectedProjects.map((project, index) => {
                        return (
                            <div className="col-md-6 col-lg-4 p-0 project"
                                key={index}
                                data-aos="zoom-in-up"
                                data-aos-duration="1000">
                                <img src={project.img} alt="" className='img-fluid w-100' />
                                <div className="overlay text-white">
                                    <p className='fw-bold'>{project.name} </p>
                                    <button className='btn-project btn btn-sm'
                                        disabled={project.type === "coming soon" ? true : false}
                                        onClick={() => goToProject(project)}>
                                        {project.type === "coming soon" ? "COMING SOON" : "LEARN MORE"}
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects