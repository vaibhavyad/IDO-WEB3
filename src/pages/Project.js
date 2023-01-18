import React from 'react';
import '../styles/style.css'
import "../styles/animate.min.css";
import "../styles/slick.css";
import UpcomingData from '../components/UpcomingData';
import StartedData from '../components/StartedData';
import CompleatedData from '../components/CompleatedData';
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Project = () => {

    return (
        <>
            <section className="page-header w-100">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize"> IDOs Project </h2>
                        <nav aria-label="breadcrumb">
                            {/* <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Project 2</li>
                            </ol> */}
                        </nav>
                    </div>
                </div>
            </section>

            {/* upcomingData */}
            <section className="project padding-top padding-bottom ido-project-wrp second-project-ido">
                <div className="container">
                    <div className="section-header section-header--left">
                        <div className="section-header__content">
                            <div className="section-header__titlebar">

                                <h2 className="section__header__title">Upcoming IDOs</h2>
                            </div>
                            <Link to="/upcoming-project" className="default-btn">View all</Link>
                        </div>
                    </div>
                    <UpcomingData />
                </div>
            </section >


            {/* startedData */}
            <section className="project padding-top padding-bottom ido-project-wrp second-project-ido background--color">
                <div className="container">
                    <div className="section-header section-header--left">
                        <div className="section-header__content">
                            <div className="section-header__titlebar">
                                {/* <p className="section-header__subtitle project_color"> Projects</p> */}
                                <h2 className="section__header__title"> Running IDOs</h2>
                            </div>
                            <Link to="/started-project" className="default-btn">View all</Link>
                        </div>
                    </div>
                    <StartedData />
                </div>
            </section >

            {/* CompleatedData */}
            <section className="project completed-project padding-top padding-bottom project-two-completed">
                <div className="container">
                    <div className="section-header section-header--left">
                        <div className="section-header__content">
                            <div className="section-header__titlebar">

                                <h2 className="section__header__title">Previous IDOs</h2>
                            </div>
                            <Link to="/completed-project" className="default-btn">View all</Link>
                        </div>
                    </div>
                    <CompleatedData />
                </div>
            </section >

        </>
    );
};

export default Project;

