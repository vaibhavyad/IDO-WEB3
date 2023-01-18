import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import "../styles/animate.min.css";
import Project1 from '../assets/images/project1.jpg'
import Project2 from '../assets/images/project2.jpg'
import ProjectCircle from '../assets/images/project-circle.png'
import IconImg from '../assets/images/eth.png'
const ProjectSecond = () => {
    return (
        <>
            <section className="page-header w-100">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize">Project Style 2</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Project 2</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="project padding-top padding-bottom ido-project-wrp second-project-ido">
                <div className="container">
                    <div className="section-header section-header--middle">
                        <div className="section-header__content">
                            <div className="section-header__titlebar">
                                <p className="section-header__subtitle"> Projects</p>
                                <h2 className="section__header__title">Upcoming IDOs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="project__wrapper">
                        <div className="swiper project__slidered py-2">
                            <div className="swiper-wrappered w-100 second-project-wrap">
                                <div className="swiper-slided">
                                    <div className="project__item project__item--completed1">
                                        <div className="project__item-inner">
                                            <div className="project__item-thumb">
                                                <img src={Project1} alt="IGO cover" />
                                                <span className="badge"><img src={IconImg}
                                                    alt="chain logo" /></span>
                                            </div>
                                            <div className="project__item-content">
                                                <div className="project__item-top">
                                                    <div className="project__item-author">
                                                        <Link to="/"><img src={ProjectCircle}
                                                            alt="author image" /></Link>
                                                        <h4>Dexer Xone</h4>
                                                    </div>
                                                </div>
                                                <ul className="project__infolist">
                                                    <li className="project__infolist-item">
                                                        <p className="project__infolist-name">Round Name:</p>
                                                        <p className="project__infolist-data">Public</p>
                                                    </li>
                                                    <li className="project__infolist-item">
                                                        <p className="project__infolist-name">Participent</p>
                                                        <p className="project__infolist-data">42</p>
                                                    </li>
                                                    <li className="project__infolist-item">
                                                        <p className="project__infolist-name">Project Start</p>
                                                        <p className="project__infolist-data">TBA</p>
                                                    </li>
                                                </ul>
                                                <div className="project__item-middle">
                                                    <div className="project__item-amount">
                                                        <p>Raised Ammount</p>
                                                        <h6><span className="color--theme-color amt">5000</span> / <span className='amt'>15000
                                                            BUSD</span>
                                                        </h6>
                                                        <div className="progress">
                                                            <div className="progress-bar w-25" role="progressbar"
                                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="project__item-bottom">

                                                    <Link to="/project-detail" className="default-btn default-btn--small">View
                                                        Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slided">
                                    <div className="project__item project__item--completed1">
                                        <div className="project__item-inner">
                                            <div className="project__item-thumb">
                                                <img src={Project2} alt="IGO cover" />
                                                <span className="badge"><img src={IconImg}
                                                    alt="chain logo" /></span>
                                            </div>
                                            <div className="project__item-content">
                                                <div className="project__item-top">
                                                    <div className="project__item-author">
                                                        <Link to="/"><img src={ProjectCircle}
                                                            alt="author image" /></Link>
                                                        <h4>Dexer Xone</h4>
                                                    </div>
                                                </div>
                                                <ul class="project__infolist">
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Round Name:</p>
                                                        <p class="project__infolist-data">Public</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Participent</p>
                                                        <p class="project__infolist-data">42</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Project Start</p>
                                                        <p class="project__infolist-data">TBA</p>
                                                    </li>
                                                </ul>
                                                <div className="project__item-middle">
                                                    <div className="project__item-amount">
                                                        <p>Raised Ammount</p>
                                                        <h6><span className="color--theme-color">5000</span> / <span>15000
                                                            BUSD</span>
                                                        </h6>
                                                        <div className="progress">
                                                            <div className="progress-bar w-25" role="progressbar"
                                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="project__item-bottom">


                                                    <Link to="/project-detail" className="default-btn default-btn--small">View
                                                        Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slided">
                                    <div className="project__item project__item--completed1">
                                        <div className="project__item-inner">
                                            <div className="project__item-thumb">
                                                <img src={Project1} alt="IGO cover" />
                                                <span className="badge"><img src={IconImg}
                                                    alt="chain logo" /></span>
                                            </div>
                                            <div className="project__item-content">
                                                <div className="project__item-top">
                                                    <div className="project__item-author">
                                                        <Link to="/"><img src={ProjectCircle}
                                                            alt="author image" /></Link>
                                                        <h4>Dexer Xone</h4>
                                                    </div>
                                                </div>
                                                <ul class="project__infolist">
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Round Name:</p>
                                                        <p class="project__infolist-data">Public</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Participent</p>
                                                        <p class="project__infolist-data">42</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Project Start</p>
                                                        <p class="project__infolist-data">TBA</p>
                                                    </li>
                                                </ul>
                                                <div className="project__item-middle">
                                                    <div className="project__item-amount">
                                                        <p>Raised Ammount</p>
                                                        <h6><span className="color--theme-color">5000</span> / <span>15000
                                                            BUSD</span>
                                                        </h6>
                                                        <div className="progress">
                                                            <div className="progress-bar w-25" role="progressbar"
                                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="project__item-bottom">
                                                    <Link to="/project-detail" className="default-btn default-btn--small">View
                                                        Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slided">
                                    <div className="project__item project__item--completed1">
                                        <div className="project__item-inner">
                                            <div className="project__item-thumb">
                                                <img src={Project1} alt="IGO cover" />
                                                <span className="badge"><img src={IconImg}
                                                    alt="chain logo" /></span>
                                            </div>
                                            <div className="project__item-content">
                                                <div className="project__item-top">
                                                    <div className="project__item-author">
                                                        <Link to="/"><img src={ProjectCircle}
                                                            alt="author image" /></Link>
                                                        <h4>Dexer Xone</h4>
                                                    </div>
                                                </div>
                                                <ul class="project__infolist">
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Round Name:</p>
                                                        <p class="project__infolist-data">Public</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Participent</p>
                                                        <p class="project__infolist-data">42</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Project Start</p>
                                                        <p class="project__infolist-data">TBA</p>
                                                    </li>
                                                </ul>
                                                <div className="project__item-middle">
                                                    <div className="project__item-amount">
                                                        <p>Raised Ammount</p>
                                                        <h6><span className="color--theme-color amt">5000</span> / <span className='amt'>15000
                                                            BUSD</span>
                                                        </h6>
                                                        <div className="progress">
                                                            <div className="progress-bar w-25" role="progressbar"
                                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="project__item-bottom">
                                                    <Link to="/project-detail" className="default-btn default-btn--small">View
                                                        Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slided">
                                    <div className="project__item project__item--completed1">
                                        <div className="project__item-inner">
                                            <div className="project__item-thumb">
                                                <img src={Project2} alt="IGO cover" />
                                                <span className="badge"><img src={IconImg}
                                                    alt="chain logo" /></span>
                                            </div>
                                            <div className="project__item-content">
                                                <div className="project__item-top">
                                                    <div className="project__item-author">
                                                        <Link to="/"><img src={ProjectCircle}
                                                            alt="author image" /></Link>
                                                        <h4>Dexer Xone</h4>
                                                    </div>
                                                </div>
                                                <ul class="project__infolist">
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Round Name:</p>
                                                        <p class="project__infolist-data">Public</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Participent</p>
                                                        <p class="project__infolist-data">42</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Project Start</p>
                                                        <p class="project__infolist-data">TBA</p>
                                                    </li>
                                                </ul>
                                                <div className="project__item-middle">
                                                    <div className="project__item-amount">
                                                        <p>Raised Ammount</p>
                                                        <h6><span className="color--theme-color">5000</span> / <span>15000
                                                            BUSD</span>
                                                        </h6>
                                                        <div className="progress">
                                                            <div className="progress-bar w-25" role="progressbar"
                                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="project__item-bottom">
                                                    <Link to="/project-detail" className="default-btn default-btn--small">View
                                                        Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slided">
                                    <div className="project__item project__item--completed1">
                                        <div className="project__item-inner">
                                            <div className="project__item-thumb">
                                                <img src={Project1} alt="IGO cover" />
                                                <span className="badge"><img src={IconImg}
                                                    alt="chain logo" /></span>
                                            </div>
                                            <div className="project__item-content">
                                                <div className="project__item-top">
                                                    <div className="project__item-author">
                                                        <Link to="/"><img src={ProjectCircle}
                                                            alt="author image" /></Link>
                                                        <h4>Dexer Xone</h4>
                                                    </div>
                                                </div>
                                                <ul class="project__infolist">
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Round Name:</p>
                                                        <p class="project__infolist-data">Public</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Participent</p>
                                                        <p class="project__infolist-data">42</p>
                                                    </li>
                                                    <li class="project__infolist-item">
                                                        <p class="project__infolist-name">Project Start</p>
                                                        <p class="project__infolist-data">TBA</p>
                                                    </li>
                                                </ul>
                                                <div className="project__item-middle">
                                                    <div className="project__item-amount">
                                                        <p>Raised Ammount</p>
                                                        <h6><span className="color--theme-color">5000</span> / <span>15000
                                                            BUSD</span>
                                                        </h6>
                                                        <div className="progress">
                                                            <div className="progress-bar w-25" role="progressbar"
                                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="project__item-bottom">

                                                    <Link to="/project-detail" className="default-btn default-btn--small">View
                                                        Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project__slider-pagination mt-4 text-center"></div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="project completed-project padding-top padding-bottom project-two-completed">

                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <div className="container">
                        <div className="section-header section-header--left">
                            <div className="section-header__content">
                                <div className="section-header__titlebar">
                                    <p className="section-header__subtitle"> Completed</p>
                                    <h2 className="section__header__title">Previous Projects</h2>
                                </div>
                                <Link to="/project-2" className="default-btn">View all</Link>
                            </div>
                        </div>
                        <div className="project__wrapper">
                            <div className="swiper project__slidered py-2">
                                <div className="swiper-wrappered w-100 second-project-wrap">
                                    <div className="swiper-slided">
                                        <div className="project__item project__item--completed1">
                                            <div className="project__item-inner">
                                                <div className="project__item-thumb">
                                                    <img src={Project1} alt="IGO cover" />
                                                    <span className="badge"><img src={IconImg}
                                                        alt="chain logo" /></span>
                                                </div>
                                                <div className="project__item-content">
                                                    <div className="project__item-top">
                                                        <div className="project__item-author">
                                                            <Link to="/"><img src={ProjectCircle}
                                                                alt="author image" /></Link>
                                                            <h4>Dexer Xone</h4>
                                                        </div>
                                                    </div>
                                                    <ul class="project__infolist">
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Round Name:</p>
                                                            <p class="project__infolist-data">Public</p>
                                                        </li>
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Participent</p>
                                                            <p class="project__infolist-data">42</p>
                                                        </li>
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Project Start</p>
                                                            <p class="project__infolist-data">TBA</p>
                                                        </li>
                                                    </ul>
                                                    <div className="project__item-middle">
                                                        <div className="project__item-amount">
                                                            <p>Raised Ammount</p>
                                                            <h6><span className="color--theme-color amt">5000</span> / <span className='amt'>15000
                                                                BUSD</span>
                                                            </h6>
                                                            <div className="progress">
                                                                <div className="progress-bar w-25" role="progressbar"
                                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="project__item-bottom">

                                                        <Link to="/project-detail" className="default-btn default-btn--small">View
                                                            Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slided">
                                        <div className="project__item project__item--completed1">
                                            <div className="project__item-inner">
                                                <div className="project__item-thumb">
                                                    <img src={Project2} alt="IGO cover" />
                                                    <span className="badge"><img src={IconImg}
                                                        alt="chain logo" /></span>
                                                </div>
                                                <div className="project__item-content">
                                                    <div className="project__item-top">
                                                        <div className="project__item-author">
                                                            <Link to="/"><img src={ProjectCircle}
                                                                alt="author image" /></Link>
                                                            <h4>Dexer Xone</h4>
                                                        </div>
                                                    </div>
                                                    <ul class="project__infolist">
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Round Name:</p>
                                                            <p class="project__infolist-data">Public</p>
                                                        </li>
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Participent</p>
                                                            <p class="project__infolist-data">42</p>
                                                        </li>
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Project Start</p>
                                                            <p class="project__infolist-data">TBA</p>
                                                        </li>
                                                    </ul>
                                                    <div className="project__item-middle">
                                                        <div className="project__item-amount">
                                                            <p>Raised Ammount</p>
                                                            <h6><span className="color--theme-color">5000</span> / <span>15000
                                                                BUSD</span>
                                                            </h6>
                                                            <div className="progress">
                                                                <div className="progress-bar w-25" role="progressbar"
                                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="project__item-bottom">


                                                        <Link to="/project-detail" className="default-btn default-btn--small">View
                                                            Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slided">
                                        <div className="project__item project__item--completed1">
                                            <div className="project__item-inner">
                                                <div className="project__item-thumb">
                                                    <img src={Project1} alt="IGO cover" />
                                                    <span className="badge"><img src={IconImg}
                                                        alt="chain logo" /></span>
                                                </div>
                                                <div className="project__item-content">
                                                    <div className="project__item-top">
                                                        <div className="project__item-author">
                                                            <Link to="/"><img src={ProjectCircle}
                                                                alt="author image" /></Link>
                                                            <h4>Dexer Xone</h4>
                                                        </div>
                                                    </div>
                                                    <ul class="project__infolist">
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Round Name:</p>
                                                            <p class="project__infolist-data">Public</p>
                                                        </li>
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Participent</p>
                                                            <p class="project__infolist-data">42</p>
                                                        </li>
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Project Start</p>
                                                            <p class="project__infolist-data">TBA</p>
                                                        </li>
                                                    </ul>
                                                    <div className="project__item-middle">
                                                        <div className="project__item-amount">
                                                            <p>Raised Ammount</p>
                                                            <h6><span className="color--theme-color">5000</span> / <span>15000
                                                                BUSD</span>
                                                            </h6>
                                                            <div className="progress">
                                                                <div className="progress-bar w-25" role="progressbar"
                                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="project__item-bottom">

                                                        <Link to="/project-detail" className="default-btn default-btn--small">View
                                                            Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slided">
                                        <div className="project__item project__item--completed1">
                                            <div className="project__item-inner">
                                                <div className="project__item-thumb">
                                                    <img src={Project1} alt="IGO cover" />
                                                    <span className="badge"><img src={IconImg}
                                                        alt="chain logo" /></span>
                                                </div>
                                                <div className="project__item-content">
                                                    <div className="project__item-top">
                                                        <div className="project__item-author">
                                                            <Link to="/"><img src={ProjectCircle}
                                                                alt="author image" /></Link>
                                                            <h4>Dexer Xone</h4>
                                                        </div>

                                                    </div>
                                                    <ul class="project__infolist">
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Round Name:</p>
                                                            <p class="project__infolist-data">Public</p>
                                                        </li>
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Participent</p>
                                                            <p class="project__infolist-data">42</p>
                                                        </li>
                                                        <li class="project__infolist-item">
                                                            <p class="project__infolist-name">Project Start</p>
                                                            <p class="project__infolist-data">TBA</p>
                                                        </li>
                                                    </ul>
                                                    <div className="project__item-middle">
                                                        <div className="project__item-amount">
                                                            <p>Raised Ammount</p>
                                                            <h6><span className="color--theme-color amt">5000</span> / <span className='amt'>15000
                                                                BUSD</span>
                                                            </h6>
                                                            <div className="progress">
                                                                <div className="progress-bar w-25" role="progressbar"
                                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="project__item-bottom">

                                                        <Link to="/project-detail" className="default-btn default-btn--small">View
                                                            Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slided">
                                        <div className="project__item project__item--completed1">
                                            <div className="project__item-inner">
                                                <div className="project__item-thumb">
                                                    <img src={Project2} alt="IGO cover" />
                                                    <span className="badge"><img src={IconImg}
                                                        alt="chain logo" /></span>
                                                </div>
                                                <div className="project__item-content">
                                                    <div className="project__item-top">
                                                        <div className="project__item-author">
                                                            <Link to="/"><img src={ProjectCircle}
                                                                alt="author image" /></Link>
                                                            <h4>Dexer Xone</h4>
                                                        </div>
                                                    </div>
                                                    <ul className="project__infolist">
                                                        <li className="project__infolist-item">
                                                            <p className="project__infolist-name">Round Name:</p>
                                                            <p className="project__infolist-data">Public</p>
                                                        </li>
                                                        <li className="project__infolist-item">
                                                            <p className="project__infolist-name">Participent</p>
                                                            <p className="project__infolist-data">42</p>
                                                        </li>
                                                        <li className="project__infolist-item">
                                                            <p className="project__infolist-name">Project Start</p>
                                                            <p className="project__infolist-data">TBA</p>
                                                        </li>
                                                    </ul>
                                                    <div className="project__item-middle">
                                                        <div className="project__item-amount">
                                                            <p>Raised Ammount</p>
                                                            <h6><span className="color--theme-color">5000</span> / <span>15000
                                                                BUSD</span>
                                                            </h6>
                                                            <div className="progress">
                                                                <div className="progress-bar w-25" role="progressbar"
                                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="project__item-bottom">


                                                        <Link to="/project-detail" className="default-btn default-btn--small">View
                                                            Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slided">
                                        <div className="project__item project__item--completed1">
                                            <div className="project__item-inner">
                                                <div className="project__item-thumb">
                                                    <img src={Project1} alt="IGO cover" />
                                                    <span className="badge"><img src={IconImg}
                                                        alt="chain logo" /></span>
                                                </div>
                                                <div className="project__item-content">
                                                    <div className="project__item-top">
                                                        <div className="project__item-author">
                                                            <Link to="/"><img src={ProjectCircle}
                                                                alt="author image" /></Link>
                                                            <h4>Dexer Xone</h4>
                                                        </div>
                                                    </div>
                                                    <ul className="project__infolist">
                                                        <li className="project__infolist-item">
                                                            <p className="project__infolist-name">Round Name:</p>
                                                            <p className="project__infolist-data">Public</p>
                                                        </li>
                                                        <li className="project__infolist-item">
                                                            <p className="project__infolist-name">Participent</p>
                                                            <p className="project__infolist-data">42</p>
                                                        </li>
                                                        <li className="project__infolist-item">
                                                            <p className="project__infolist-name">Project Start</p>
                                                            <p className="project__infolist-data">TBA</p>
                                                        </li>
                                                    </ul>
                                                    <div className="project__item-middle">
                                                        <div className="project__item-amount">
                                                            <p>Raised Ammount</p>
                                                            <h6><span className="color--theme-color">5000</span> / <span>15000
                                                                BUSD</span>
                                                            </h6>
                                                            <div className="progress">
                                                                <div className="progress-bar w-25" role="progressbar"
                                                                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="project__item-bottom">
                                                        <Link to="/project-detail" className="default-btn default-btn--small">View
                                                            Details</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project__slider-pagination mt-4 text-center"></div>
                            </div>
                        </div>
                        <ul className="pagination mt-5 justify-content-center">
                            <li className="page-item disabled">
                                <span className="page-link"><i className="arrow-left"></i></span>
                            </li>
                            <li className="page-item active" aria-current="page"><Link to="/" className="page-link" >1</Link></li>
                            <li className="page-item">
                                <span className="page-link">2</span>
                            </li>
                            <li className="page-item"><Link to="/" className="page-link">3</Link></li>
                            <li className="page-item">
                                <Link to="/" className="page-link"><i className="arrow-right"></i></Link>
                            </li>
                        </ul>
                    </div>
                </AnimationOnScroll>
            </section >
            <section className="cta padding-top padding-bottom w-100">
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <div className="container">
                        <div className="cta__wrapper">
                            <div className="cta__content">
                                <p className="section-header__subtitle"> Have any Project?</p>
                                <h2 className="section__header__title"> Apply For IDO/INO</h2>
                                <Link to="/apply-project" className="default-btn"><span>Apply to launch</span></Link>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
        </>
    )
}

export default ProjectSecond