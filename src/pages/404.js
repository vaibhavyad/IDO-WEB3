import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/animate.min.css";
const PageNotFound = () => {
    return (
        <>
            <section className="page-header bg--cover">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize">404</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">404</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <div className="error padding-top padding-bottom">
                <div className="container">
                    <div className="error__wrapper text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="error__content">
                                    <img src="assets/images/error/404.png" alt="404 Image" />
                                    <h2><span className="color--theme-color">Opps !</span> You're Lost in the Space</h2>
                                    <p>The page you're looking for is not found or unreachable . please try again or go back to
                                        home </p>
                                    <Link to="/" className="default-btn"><span>Back to home</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="cta  padding-bottom" data-aos="fade-up" data-aos-duration="1000">
                <div className='animation-wrapper'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <div className="container">
                            <div className="cta__wrapper">
                                <div className="cta__content">
                                    <p className="section-header__subtitle"> Have any Project?</p>
                                    <h2 className="section__header__title"> Apply For IDO/INO</h2><Link to="/"
                                        className="default-btn"><span>Apply
                                            to
                                            launch</span></Link>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </section>
        </>
    )
}

export default PageNotFound