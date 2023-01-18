import React from 'react'
import { Link } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/animate.min.css";
const SignUp = () => {
    return (
        <>
            <section className="page-header w-100">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize">Sign up page</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Sign up</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <div className="login-section padding-top padding-bottom w-100">
                <div className=" container">
                    <div className="account-wrapper">
                        <div className="account-title">
                            <h2>Sign Up</h2>
                            <p>Enter your all information to create a new account</p>
                        </div>

                        <form className="account-form">
                            <div className="form-group">
                                <input type="text" placeholder="First Name" name="Fname" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last Name" name="Lname" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Email" name="email" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" name="password" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" name="password" />
                            </div>
                            <div className="form-group">
                                <button className="d-block default-btn"><span>Create Account</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Have any Account? <Link to="/login.html"> Login</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">Register With Social Media</h5>
                            <ul className="social justify-content-center">
                                <li className="social__item">
                                    <Link to="/" className="social__link"><i
                                        className="icon-twitter icon-social"></i></Link>
                                </li>
                                <li className="social__item">
                                    <Link to="/" className="social__link"><i
                                        className="icon-discord icon-social"></i></Link>
                                </li>
                                <li className="social__item">
                                    <Link to="/" className="social__link"><i
                                        className="icon-twitch icon-social"></i></Link>
                                </li>
                                <li className="social__item">
                                    <Link to="/" className="social__link"><i
                                        className="icon-instagram icon-social"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="newsletter  padding-bottom w-100">
                <div className='animation-wrapper'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <div className="container">
                            <div className="newsletter__wrapper newsletter__wrapper--bg-shapes">
                                <div className="section-header section-header--middle">
                                    <div className="section-header__content">
                                        <div className="section-header__titlebar">
                                            <p className="section-header__subtitle"> Stay Updated</p>
                                            <h3 className="section__header__title"> Subscribe For Newsletter</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="newsletter__form">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6">
                                            <form action="#">
                                                <input type="email" className="form-control" placeholder="Email address"
                                                    aria-label="Newsletter Email" />
                                                <button type="submit">Subscribe
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </section>
        </>
    )
}

export default SignUp