import React from 'react'
import { Link } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/animate.min.css";
const Login = () => {
    return (
        <>
            <section className="page-header w-100">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize">Login Page</h2>
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
                            <h2>Login</h2>
                            <p>Enter your email address and password to get access your account</p>
                        </div>

                        <form className="account-form">
                            <div className="form-group">
                                <input type="text" placeholder="User Name" name="username" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" name="password" />
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label for="remember">Remember Me</label>
                                    </div>
                                    <Link to="/reset-pass">Forget Password?</Link>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="default-btn"><span>Login Now</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/sign-up"> Sign
                                Up</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">Login With Social Media</h5>
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
            </section>
        </>
    )
}

export default Login