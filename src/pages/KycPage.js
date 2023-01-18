import { Link } from '@mui/material';
import React from 'react';
import '../styles/style.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/animate.min.css"


const KycPage = (props) => {
    return (
        <>
            <section className="page-header bg--cover kyc-first">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize">KYC Page</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link to="/kyc">KYC</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="kyc padding-top padding-bottom w-100 kyc-wrp">
                <div class="container">
                    <div className="kyc__wrapper">
                        <form className="kyc__form" id="kycForm" action="#!">
                            <div className="form-header d-flex">
                                <span className="stepIndicator active">Account Setup</span>
                                <span className="stepIndicator">Social Profiles</span>
                                <span className="stepIndicator">Personal Details</span>
                            </div>
                            <div className="step step-first">
                                <h4 className="text-center">Choose Varification Option</h4>


                                <div className="form-group mb-5">
                                    <h6>Select Region</h6>
                                    <select className="form-select" aria-label="Select Region">
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Spain</option>
                                    </select>
                                </div>

                                <div className="form-group mb-4">
                                    <h6>Select Identity Type</h6>
                                    <div className="select-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="identy-check" id="nid-check" />
                                            <label className="form-check-label" for="nid-check">
                                                National ID
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="identy-check" id="passport-check"
                                                checked />
                                            <label className="form-check-label" for="passport-check">
                                                Passport
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="identy-check" id="license-check"
                                                checked />
                                            <label className="form-check-label" for="license-check">
                                                Driving License
                                            </label>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="step">
                                <h4 className="text-center">Upload Documents</h4>
                                <ul className="upload__list mb-5">
                                    <li className="upload__item">
                                        <div className="custom-upload">
                                            <span><i className="fa-solid fa-cloud-arrow-up"></i></span>
                                            <input className="fileUp" type="file" name="nid-front" />
                                        </div>
                                        <p>NID Front Photo</p>
                                    </li>
                                    <li className="upload__item">
                                        <div className="custom-upload">
                                            <span><i className="fa-solid fa-cloud-arrow-up"></i></span>
                                            <input className="fileUp" type="file" name="nid-back" />
                                        </div>
                                        <p>NID Back Photo</p>
                                    </li>
                                    <li className="upload__item">
                                        <div className="custom-upload">
                                            <span><i className="fa-solid fa-cloud-arrow-up"></i></span>
                                            <input className="fileUp" type="file" name="selfie-with-nid" />
                                        </div>
                                        <p>Selfie With NID</p>
                                    </li>
                                </ul>

                                <ul className="rules__list mb-5">
                                    <li className="rules__item"> <span><i className="fa-solid fa-square-check"></i></span> File
                                        Accepted: JPEG/JPG/PNG (Max size: 10 MB) </li>
                                    <li className="rules__item rules__item--active"> <span><i
                                        className="fa-solid fa-square-check"></i></span> Document
                                        should be good condition </li>
                                    <li className="rules__item"> <span><i className="fa-solid fa-square-check"></i></span> Face
                                        must be
                                        clear visible</li>
                                    <li className="rules__item"> <span><i className="fa-solid fa-square-check"></i></span>
                                        Document must
                                        be valid period</li>
                                </ul>
                                <div className="form-group mb-5">
                                    <h6>Enter NID Number</h6>
                                    <input className="form-control" type="text" name="nid-number" placeholder="eg: 29348 9348 398" />
                                </div>
                            </div>
                            <div className="step">
                                <h4 className="text-center">Personal Information</h4>

                                <div className="form-group mb-4">
                                    <h6>Full Name</h6>
                                    <input className="form-control" type="text" name="Full Name" placeholder="eg: Alex Hales" />
                                </div>
                                <div className="form-group mb-4">
                                    <h6>State/Provience</h6>
                                    <input className="form-control" type="text" name="state Name" placeholder="eg: Los Angeles" />
                                </div>
                                <div className="form-group mb-4">
                                    <h6>Address Line</h6>
                                    <input className="form-control" type="text" name="address line" placeholder="eg: 653 Jett Lane" />
                                </div>
                                <div className="form-group mb-4">
                                    <h6>City Name</h6>
                                    <input className="form-control" type="text" name="city name" placeholder="eg: Los Angeles" />
                                </div>
                                <div className="form-group mb-4">
                                    <h6>Postal Code</h6>
                                    <input className="form-control" type="text" name="Postal code" placeholder="eg: 90017" />
                                </div>
                            </div>
                            <div className="form-footer d-flex">
                                <button type="button" id="prevBtn" onclick="nextPrev(-1)" className='kyc-first-prev-btn'>Previous</button>
                                <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default KycPage;

