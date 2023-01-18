import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/animate.min.css"

const Faq = () => {
    return (
        <>
            <section className="page-header w-100">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize">Frequently Asked Questions</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link to="/kyc">KYC</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="faq padding-top padding-bottom" id="faq">

                <div className="container">
                    <div className="section-header section-header--middle">
                        <div className="section-header__content">
                            <div className="section-header__titlebar">
                                <p className="section-header__subtitle"> Faq</p>
                                <h2 className="section__header__title"> Common Queries</h2>
                            </div>
                        </div>
                    </div>
                    <div className="faq__wrapper aos-init" data-aos="fade-up" data-aos-duration="1000">
                        <Tabs
                            defaultActiveKey="General Questions"
                            id="uncontrolled-tab-example"
                            className="faq__tab nav nav-pills mb-5"
                        >
                            <Tab eventKey="General Questions" title="General Questions">
                                <div className="tab-content faq__content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
                                        <div className="row gy-3 gx-5">
                                            <div className="col-lg-6">
                                                <Accordion className="accordion accordion-flush" id="accordionGeneral1" defaultActiveKey="0">
                                                    <Accordion.Item className="accordion-item" eventKey="0">
                                                        <Accordion.Header className="accordion-header" id="general-headingOne">
                                                            Initial IDO Launching Platforms
                                                        </Accordion.Header>
                                                        <Accordion.Body id="general-collapseOne" className="accordion-collapse collapse show" aria-labelledby="general-headingOne" data-bs-parent="#accordionGeneral1">
                                                            <div className="accordion-body">Fundamentally seller sells their currency to
                                                                gain cash and a buyer buys
                                                                expecting hold the currency until value increases in dollar/rupee terms
                                                                In mid-August 202 total market value of all cryptocurrency exceeded
                                                                $2 trillion, with Bitcoin alone making up 44% of that.
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item className="accordion-item" eventKey="1">
                                                        <Accordion.Header className="accordion-header" id="general-headingTwo">
                                                            Initial IDO Launching Platforms
                                                        </Accordion.Header>
                                                        <Accordion.Body id="general-collapseTwo" className="accordion-collapse collapse" aria-labelledby="general-headingTwo" data-bs-parent="#accordionGeneral2">
                                                            <div className="accordion-body">Fundamentally seller sells their currency to
                                                                gain cash and a buyer buys
                                                                expecting hold the currency until value increases in dollar/rupee terms
                                                                In mid-August 202 total market value of all cryptocurrency exceeded
                                                                $2 trillion, with Bitcoin alone making up 44% of that.
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item className="accordion-item" eventKey="2">
                                                        <Accordion.Header className="accordion-header" id="general-headingOneThree">
                                                            Initial IDO Launching Platforms
                                                        </Accordion.Header>
                                                        <Accordion.Body id="general-collapseOneThree" className="accordion-collapse collapse" aria-labelledby="general-headingOneThree" data-bs-parent="#accordionGeneralOneThree">
                                                            <div className="accordion-body">Fundamentally seller sells their currency to
                                                                gain cash and a buyer buys
                                                                expecting hold the currency until value increases in dollar/rupee terms
                                                                In mid-August 202 total market value of all cryptocurrency exceeded
                                                                $2 trillion, with Bitcoin alone making up 44% of that.
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className="col-lg-6">
                                                <Accordion className="accordion accordion-flush" id="accordionGeneral3">
                                                    <Accordion.Item className="accordion-item" eventKey="3">
                                                        <Accordion.Header className="accordion-header" id="general-headingThree">
                                                            Initial IDO Launching Platforms
                                                        </Accordion.Header>
                                                        <Accordion.Body id="general-collapseThree" className="accordion-collapse collapse" aria-labelledby="general-headingThree" data-bs-parent="#accordionGeneral3">
                                                            <div className="accordion-body">Fundamentally seller sells their currency to
                                                                gain cash and a buyer buys
                                                                expecting hold the currency until value increases in dollar/rupee terms
                                                                In mid-August 202 total market value of all cryptocurrency exceeded
                                                                $2 trillion, with Bitcoin alone making up 44% of that.
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item className="accordion-item" eventKey="4">
                                                        <Accordion.Header className="accordion-header" id="general-heading4">
                                                            Initial IDO Launching Platforms
                                                        </Accordion.Header>
                                                        <Accordion.Body id="general-collapseFour" className="accordion-collapse collapse" aria-labelledby="general-heading4" data-bs-parent="#accordionGeneral4">
                                                            <div className="accordion-body">Fundamentally seller sells their currency to
                                                                gain cash and a buyer buys
                                                                expecting hold the currency until value increases in dollar/rupee terms
                                                                In mid-August 202 total market value of all cryptocurrency exceeded
                                                                $2 trillion, with Bitcoin alone making up 44% of that.
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item className="accordion-item" eventKey="5">
                                                        <Accordion.Header className="accordion-header" id="general-heading5">
                                                            Initial IDO Launching Platforms
                                                        </Accordion.Header>
                                                        <Accordion.Body id="general-collapseFive" className="accordion-collapse collapse" aria-labelledby="general-heading5" data-bs-parent="#accordionGeneral5">
                                                            <div className="accordion-body">Fundamentally seller sells their currency to
                                                                gain cash and a buyer buys
                                                                expecting hold the currency until value increases in dollar/rupee terms
                                                                In mid-August 202 total market value of all cryptocurrency exceeded
                                                                $2 trillion, with Bitcoin alone making up 44% of that.
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Token Sales" title="Token Sales">
                                <div className="tab-pane fade show active" id="pills-token" role="tabpanel" aria-labelledby="pills-token-tab">
                                    <div className="row gy-3 gx-5">
                                        <div className="col-lg-6">
                                            <Accordion className="accordion accordion-flush" id="accordionGeneral6">
                                                <Accordion.Item className="accordion-item" eventKey="6">
                                                    <Accordion.Header className="accordion-header" id="general-headingsix">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapseSix" className="accordion-collapse collapse" aria-labelledby="general-headingSix" data-bs-parent="#accordionGeneral6">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="7">
                                                    <Accordion.Header className="accordion-header" id="general-heading7">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapseSeven" className="accordion-collapse collapse" aria-labelledby="general-heading7" data-bs-parent="#accordionGeneral7">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="8">
                                                    <Accordion.Header className="accordion-header" id="general-heading8">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapseEight" className="accordion-collapse collapse" aria-labelledby="general-heading8" data-bs-parent="#accordionGeneral1">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6">
                                            <Accordion className="accordion accordion-flush" id="accordionGeneral9">
                                                <Accordion.Item className="accordion-item" eventKey="9">
                                                    <Accordion.Header className="accordion-header" id="general-headingNine">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapseNine" className="accordion-collapse collapse" aria-labelledby="general-headingNine" data-bs-parent="#accordionGeneral9">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="10">
                                                    <Accordion.Header className="accordion-header" id="general-heading10">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapseTen" className="accordion-collapse collapse" aria-labelledby="general-heading10" data-bs-parent="#accordionGeneral10">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="11">
                                                    <Accordion.Header className="accordion-header" id="general-heading11">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapseEleven" className="accordion-collapse collapse" aria-labelledby="general-heading11" data-bs-parent="#accordionGeneral11">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Investor Guides" title="Investor Guides">
                                <div className="tab-pane fade show active" id="pills-investor" role="tabpanel" aria-labelledby="pills-investor-tab">
                                    <div className="row gy-3 gx-5">
                                        <div className="col-lg-6">
                                            <Accordion className="accordion accordion-flush" id="accordionGeneral12">
                                                <Accordion.Item className="accordion-item" eventKey="12">
                                                    <Accordion.Header className="accordion-header" id="general1-heading12">
                                                        What is IDO Launching?
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general1-collapse12" className="accordion-collapse collapse" aria-labelledby="general1-heading12" data-bs-parent="#accordionGeneral12">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="13">
                                                    <Accordion.Header className="accordion-header" id="general-heading13">
                                                        What is IDO Launching?
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapse13" className="accordion-collapse collapse" aria-labelledby="general-heading13" data-bs-parent="#accordionGeneral13">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="14">
                                                    <Accordion.Header className="accordion-header" id="general-heading14">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapse14" className="accordion-collapse collapse" aria-labelledby="general-heading14" data-bs-parent="#accordionGeneral14">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6">
                                            <Accordion className="accordion accordion-flush" id="accordionGeneral15">
                                                <Accordion.Item className="accordion-item" eventKey="15">
                                                    <Accordion.Header className="accordion-header" id="general1-heading15">
                                                        What is IDO Launching?
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general1-collapse15" className="accordion-collapse collapse" aria-labelledby="general1-heading15" data-bs-parent="#accordionGeneral15">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="16">
                                                    <Accordion.Header className="accordion-header" id="general-heading16">
                                                        How can I launch an IDO in Torkgo
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapse16" className="accordion-collapse collapse" aria-labelledby="general-heading16" data-bs-parent="#accordionGeneral16">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="17">
                                                    <Accordion.Header className="accordion-header" id="general-heading17">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapse17" className="accordion-collapse collapse" aria-labelledby="general-heading17" data-bs-parent="#accordionGeneral17">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Security" title="Security">
                                <div className="tab-pane fade show active" id="pills-security" role="tabpanel" aria-labelledby="pills-security-tab">
                                    <div className="row gy-3 gx-5">
                                        <div className="col-lg-6">
                                            <Accordion className="accordion accordion-flush" id="accordionGeneral18">
                                                <Accordion.Item className="accordion-item" eventKey="18">
                                                    <Accordion.Header className="accordion-header" id="general1-heading18">
                                                        What is IDO Launching?
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general1-collapse18" className="accordion-collapse collapse" aria-labelledby="general1-heading18" data-bs-parent="#accordionGeneral15">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="19">
                                                    <Accordion.Header className="accordion-header" id="general-heading19">
                                                        How can I launch an IDO in Torkgo
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapse19" className="accordion-collapse collapse" aria-labelledby="general-heading19" data-bs-parent="#accordionGeneral19">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="20">
                                                    <Accordion.Header className="accordion-header" id="general-heading20">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapse20" className="accordion-collapse collapse" aria-labelledby="general-heading20" data-bs-parent="#accordionGeneral20">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6">
                                            <Accordion className="accordion accordion-flush" id="accordionGeneral21">
                                                <Accordion.Item className="accordion-item" eventKey="21">
                                                    <Accordion.Header className="accordion-header" id="general1-heading21">
                                                        What is IDO Launching?
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general1-collapse21" className="accordion-collapse collapse" aria-labelledby="general1-heading21" data-bs-parent="#accordionGeneral15">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="22">
                                                    <Accordion.Header className="accordion-header" id="general-heading22">
                                                        How can I launch an IDO in Torkgo
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapse22" className="accordion-collapse collapse" aria-labelledby="general-heading22" data-bs-parent="#accordionGeneral22">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className="accordion-item" eventKey="23">
                                                    <Accordion.Header className="accordion-header" id="general-heading23">
                                                        Initial IDO Launching Platforms
                                                    </Accordion.Header>
                                                    <Accordion.Body id="general-collapse23" className="accordion-collapse collapse" aria-labelledby="general-heading23" data-bs-parent="#accordionGeneral23">
                                                        <div className="accordion-body">Fundamentally seller sells their currency to
                                                            gain cash and a buyer buys
                                                            expecting hold the currency until value increases in dollar/rupee terms
                                                            In mid-August 202 total market value of all cryptocurrency exceeded
                                                            $2 trillion, with Bitcoin alone making up 44% of that.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
            <section className="cta padding-top padding-bottom  apply-for-ido" data-aos="fade-up" data-aos-duration="1000">
                <div className='animation-wrapper'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <div className="container">
                            <div className="cta__wrapper">
                                <div className="cta__content">
                                    <p className="section-header__subtitle"> Have any Project?</p>
                                    <h2 className="section__header__title"> Apply For IDO/INO</h2>
                                    <Link to="/" className="default-btn"><span>Apply to
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

export default Faq