import React from 'react'
import Bzon from '../assets/images/bzon-img.png';
import triangle from '../assets/images/triangle.png';
import tork from '../assets/images/tork.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/animate.min.css";
import { Link } from 'react-router-dom';
const LeaderBoard = () => {
    return (
        <>
            <section className="page-header w-100">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize">Leader Board</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Leaderboard</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="leaderboard padding-top padding-bottom w-100">
                <div className="container">
                    <div className="leaderboard__wrapper">
                        <div className="table-responsive">
                            <table className="table table-borderless leaderboard__table">
                                <thead>
                                    <tr>
                                        <th scope="col">Status</th>
                                        <th scope="col">Rank</th>
                                        <th scope="col">Project Name</th>
                                        <th scope="col">Public Key</th>
                                        <th scope="col">Locked</th>
                                        <th scope="col">Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-freez"><i className="fa-solid fa-minus"></i></div>
                                        </td>
                                        <th scope="row">01</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={Bzon} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">Battle Ground</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x95e441....ddd953454</td>
                                        <td>135 Days</td>
                                        <td>$39300090</td>
                                    </tr>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-up">+1 <i className="fa-solid fa-angle-up"></i></div>
                                        </td>
                                        <th scope="row">02</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={triangle} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">Frozen city</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x95e441....ddd953454</td>
                                        <td>235 Days</td>
                                        <td>$39300090</td>
                                    </tr>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-down"> -1 <i className="fa-solid fa-angle-down"></i>
                                            </div>
                                        </td>
                                        <th scope="row">03</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={tork} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">Monster Squad </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x95e441....ddd953454</td>
                                        <td>55 Days</td>
                                        <td>$230090</td>
                                    </tr>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-freez"><i className="fa-solid fa-minus"></i></div>
                                        </td>
                                        <th scope="row">04</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={Bzon} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">RobotX Ply</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x65e441....ddd9534353</td>
                                        <td>90 Days</td>
                                        <td>$5300090</td>
                                    </tr>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-up"> +2 <i className="fa-solid fa-angle-up"></i></div>
                                        </td>
                                        <th scope="row">05</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={triangle} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">SpeeDEXIDO</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x95e441....ddd953454</td>
                                        <td>65 Days</td>
                                        <td>$600090</td>
                                    </tr>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-down"> -1 <i className="fa-solid fa-angle-down"></i>
                                            </div>
                                        </td>
                                        <th scope="row">06</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={tork} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">TorkBall Cup</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x95e441....ddd953454</td>
                                        <td>95 Days</td>
                                        <td>$930090</td>
                                    </tr>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-down"> -2 <i className="fa-solid fa-angle-down"></i>
                                            </div>
                                        </td>
                                        <th scope="row">07</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={Bzon} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">NinJa Hattori</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x95e441....ddd953454</td>
                                        <td>5 Days</td>
                                        <td>$300090</td>
                                    </tr>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-up"> +3 <i className="fa-solid fa-angle-up"></i></div>
                                        </td>
                                        <th scope="row">08</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={triangle} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">TorkGo XoX</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x95e441....ddd955412</td>
                                        <td>120 Days</td>
                                        <td>$300090</td>
                                    </tr>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-down"> -1 <i className="fa-solid fa-angle-down"></i>
                                            </div>
                                        </td>
                                        <th scope="row">09</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={tork} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">GamFier DeF</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x95e441....ddd953454</td>
                                        <td>25 Days</td>
                                        <td>$50090</td>
                                    </tr>
                                    <tr className="leaderboard__item">
                                        <td>
                                            <div className="leaderboard--level-down"> -1 <i className="fa-solid fa-angle-down"></i>
                                            </div>
                                        </td>
                                        <th scope="row">10</th>
                                        <td>
                                            <div className="lead-project position-relative">
                                                <div className="lead-project__thumb">
                                                    <img src={Bzon} alt="Project Image" />
                                                </div>
                                                <div className="lead-project__content">
                                                    <h6><Link to="/project-detail" className="stretched-link">NFTiX HuB Guy</Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>0x95e441....ddd953454</td>
                                        <td>235 Days</td>
                                        <td>$39300090</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <ul className="pagination mt-5 justify-content-center">
                            <li className="page-item disabled">
                                <span className="page-link"><i className="arrow-left"></i></span>
                            </li>
                            <li className="page-item active" aria-current="page"><Link to="/" className="page-link">1</Link></li>
                            <li className="page-item">
                                <span className="page-link">2</span>
                            </li>
                            <li className="page-item"><Link to="/" className="page-link">3</Link></li>
                            <li className="page-item">
                                <Link to="/" className="page-link"><i className="arrow-right"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section >
            <section className="cta  padding-bottom w-100">
                <div className='animation-wrapper'>
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
                </div>
            </section>
        </>
    )
}

export default LeaderBoard