import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    const [activeItem, setActiveItem] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "projects", "contact"];
            const scrollPosition = window.pageYOffset;

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (
                    sectionElement.offsetTop <= scrollPosition + 66 &&
                    sectionElement.offsetTop + sectionElement.offsetHeight >
                    scrollPosition + 66
                ) {
                    setActiveItem(section);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeItem]);

    return (
        <section className="navbar-top container-fluid" id='navbar'>
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <button className="navbar-toggler ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse fw-bold" id="navmenu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Portfolio" className='nav-link pe-5'>
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#about"
                                    className={`nav-link pe-5 ${activeItem === "about" ? "active" : ""}`}>
                                    ABOUT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects"
                                    className={`nav-link pe-5 ${activeItem === "projects" ? "active" : ""}`}>
                                    PROJECTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact"
                                    className={`nav-link pe-5 ${activeItem === "contact" ? "active" : ""}`}>
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
