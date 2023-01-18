import React from 'react'
import { Link } from 'react-router-dom';
import Graph from '../assets/images/graph.png'
import '../styles/style.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/animate.min.css";
const Tokenomics = () => {
    return (
        <>
            <section className="page-header w-100">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize">Tokenomics</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Tokenomics</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="token padding-top padding-bottom w-100">
                <div className="container">
                    <div className="section-header section-header--middle">
                        <div className="section-header__content">
                            <div className="section-header__titlebar">
                                <p className="section-header__subtitle"> Statistics</p>
                                <h2 className="section__header__title">Tokenomics</h2>
                            </div>
                        </div>
                    </div>
                    <div className="token__wrapper">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="token__info">

                                    <ul className="token__info-list">
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Total Supply</p>
                                            <p className="token__info-list-value">15,000,000</p>
                                        </li>
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Public sale</p>
                                            <p className="token__info-list-value">$0.24</p>
                                        </li>
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Farming Pool</p>
                                            <p className="token__info-list-value">27.3%</p>
                                        </li>
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Staking</p>
                                            <p className="token__info-list-value">15.3%</p>
                                        </li>
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Ecosystem</p>
                                            <p className="token__info-list-value">07.5%</p>
                                        </li>
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Advisor</p>
                                            <p className="token__info-list-value">7.03%</p>
                                        </li>
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Private Sale</p>
                                            <p className="token__info-list-value">23.45%</p>
                                        </li>
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Liquidity</p>
                                            <p className="token__info-list-value">13.3%</p>
                                        </li>
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Marketing</p>
                                            <p className="token__info-list-value">7.3%</p>
                                        </li>
                                        <li className="token__info-list-item">
                                            <p className="token__info-list-name">Team</p>
                                            <p className="token__info-list-value">5.3%</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="token__allocation  bg--shade1">
                                    <div className="token__allocation-inner text-center">
                                        <h4 className="mb-4">Sale Proceed Allocation</h4>
                                        <div className="token__allocation-thumb">
                                            <img src={Graph} alt="Tokenomics Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </>
    )
}

export default Tokenomics