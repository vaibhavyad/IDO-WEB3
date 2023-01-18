import React from 'react';
import * as s from "../styles/global";
import '../styles/style.css'
// import '../styles/aos.css'
// import '../styles/swiper-bundle.min.css'
import IconImg from '../assets/images/eth.png'
import work1 from '../assets/images/work-1.png'
import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/animate.min.css";
import "../styles/slick.css";
import Slider from "react-slick";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Badge } from "react-bootstrap";
import Countdown from "react-countdown";
import { usePoolContext } from "../context/poolContext";
import Loader from '../components/Loader';

const Home = () => {

  const navigate = useNavigate()
  const contract = useSelector((state) => state.contract);
  const { allPools } = usePoolContext();
  // console.log("allPools>>>",allPools)

  // Started and not started data show

  let startNotStart = [];
  Object.keys(allPools).map((item) => {
    if (!(parseInt(allPools[item].end) < parseInt(Date.now() / 1000))) {
      startNotStart.push(allPools[item])
    }
  });
  // console.log("startNotStart>>>>", startNotStart)

  // Completed Data Show
  let data = [];
  Object.keys(allPools).map((item) => {
    if ((parseInt(allPools[item].end) < parseInt(Date.now() / 1000))) {
      data.push(allPools[item])
    }
  });
  // console.log("data>>>",data)

  useEffect(() => {

  }, [allPools]);

  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    slidesToScroll: 1
  };
  var settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const onClikRedirect = () => {
    setTimeout(() => {
      navigate("/account")
    }, 10)
    localStorage.removeItem("redirect");
  }

  const onHandleRedirect = (data) => {
    // console.log("data>>>",data)
    navigate("/project-detail/" + data.idoAddress)
  }
  return (
    <>
      <section className="banner banner--style2 w-100" id="home">
        <div className="container">
          <div className="banner__wrapper">
            <div className="row g-5 justify-content-center">
              <div className="col-lg-10">
                <div className="banner__content text-center" data-aos="zoom-in" data-aos-duration="900">
                  <h1>IDOFactory </h1>
                  <p> Decentralize IDO launchpad platform</p>
                  <Link to="/project" className="default-btn"><span>Explore IDOs</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project project--completed2">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="container">
            <div className="project__wrapper wrapper_height">
              {Object.keys(allPools).length && startNotStart.length !=="0" ?
                <div className="project--completed2-slider swiper">
                  <div className="swiper-wrapper">
                    <div className='w-100'>
                      <Slider {...settings}>
                        {
                          startNotStart?.map((items, index) => {
                            // console.log("items>>>>>>>>>>>>>>>>>>>>>>>>>>>", items)

                            return (

                              <div className="swiper-slide" key={index}>
                                <div className="project__item2 position-relative">
                                  <div className="project__item2-inner">

                                    <div className="project__item2-name name-resize">
                                      <div className="project__item2-thumb image-size"><img src={items.metadata.image}
                                        alt="Project Image" />
                                      </div>
                                      <div className="project__item2-content">
                                        <h4>
                                         
                                          <Link to={"/project-detail/"+ items.idoAddress} className="stretched-link">
                                            {items.tokenName}
                                          </Link>
                                          {items.tokenSymbol ? <p>{items.tokenSymbol}</p> : null}

                                        </h4>
                                        <div fd="row" jc="flex-start">
                                          {
                                            parseInt(items.end) < parseInt(Date.now() / 1000) ? (
                                              <Badge bg="secondary">Ended</Badge>
                                            ) : parseInt(items.start) < parseInt(Date.now() / 1000) ? (
                                              <Badge bg="success">Started</Badge>
                                            ) : (
                                              <Badge bg="secondary">Not started</Badge>
                                            )
                                          }
                                        </div>
                                        {/* <p>PRICE (GAC) = 0.59 BUSD</p> */}
                                      </div>
                                    </div>

                                    <div className="project__item2-chain">
                                      <img src={IconImg} alt="chain icon" />
                                    </div>

                                    <div className="project__item2-time">
                                      {/* <p>2 Days Ago</p> */}

                                      {
                                        items.start < Date.now() / 1000 ?
                                          (
                                            <>
                                              <p>End time</p>
                                              <Countdown
                                                date={parseInt(items.end) * 1000}
                                              />
                                            </>
                                          )
                                          : (
                                            items.end > Date.now() / 1000 ?
                                              (
                                                <>
                                                  <p>Start time</p>
                                                  <Countdown
                                                    date={parseInt(items.start) * 1000}
                                                  />
                                                </>
                                              ) : null
                                          )
                                      }
                                    </div>
                                    <div className="project__item-amount">
                                      <div className="progress">
                                        <div className="progress-bar w-25" role="progressbar"
                                          aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>

                                    </div>

                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </Slider>

                    </div>
                  </div>
                </div> : <Loader />
              }
            </div>

            {/* {
              startNotStart.length ?
                <div className="text-center mt-5">
                </div> :null
            } */}
            {
              Object.keys(allPools).length && !startNotStart.length ? <h3>Upcoming Projects are not available</h3> : null
            }
          </div>
        </AnimationOnScroll>

      </section>

      <section className="project completed-project uplifted">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="container">
            <div className="section-header section-header--left">
              <div className="section-header__content">
                <div className="section-header__titlebar">
                  <h2 className="section__header__title">Previous Projects</h2>
                </div>
                <Link to="/completed-project" className="default-btn">View all</Link>
              </div>
            </div>
            <div className="project__wrapper">
              <div className="swiper project__slidered py-2">
                <div className="swiper-wrappered w-100">
                  {data.length ? <Slider {...settings2}>
                    {
                      data.map((data, index) => {
                        // console.log("data>>>>>>>>>>>>>>>>>>",data)
                        return (
                          <div className="swiper-slided" key={index}>


                            <div className="project__item project__item--completed1">

                              <div className="project__item-inner" key={index}>
                                <div className="project__item-thumb">
                                  <img src={data?.metadata?.image2} alt="IGO cover" />
                                  <span className="badge"><img src={IconImg}
                                    alt="chain logo" /></span>
                                </div>
                                <div className="project__item-content">
                                  <div className="project__item-top">
                                    <div className="project__item-author">
                                      <Link to=""><img src={data?.metadata?.image}
                                        alt="author image" /></Link>
                                      <h4>{data?.tokenName}</h4>
                                      {data?.tokenSymbol ? <p>{data?.tokenSymbol}</p> : null}
                                    </div>

                                  </div>

                                  <div className='discription-wrap'>
                                    <h4>Description</h4>
                                    <p className='wrapper-discrition'>{data?.metadata?.description}...</p>
                                  </div>
                                  <div className="project__item-middle">
                                    <div className="project__item-amount">
                                      <div className="progress">

                                        <div className="progress-bar w-25" role="progressbar"
                                          aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>

                                    </div>
                                  </div>
                                  <div className="project__item-bottom d-flex justify-content-center">
                                    <button onClick={() => onHandleRedirect(data)}
                                      className="default-btn default-btn--small">View Details</button>
                                  </div>
                                </div>
                              </div>

                            </div>

                          </div>
                        )
                      })
                    }
                  </Slider>
                    :
                    <Loader />
                  }
                </div>
                <div className="project__slider-pagination mt-4 text-center"></div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </section >

      <section className="benifit padding-top">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="container">
            <div className="section-header section-header--middle ">
              <div className="section-header__content">
                <div className="section-header__titlebar">
                  <p className="section-header__subtitle"> Benifits</p>
                  <h2 className="section__header__title">What We Offer</h2>
                </div>
              </div>
            </div>
            <div className="benifit__wrapper">
              <div className="row g-5">
                <div className="col-lg-3 col-sm-6 benifit-content">
                  <div className="benifit__item ">
                    <div className="benifit__item-inner">
                      <div className="benifit__item-thumb">
                        <img src={work1} alt="Benifit image" />
                      </div>
                      <div className="benifit__item-content">
                        <h4>Cross Chain</h4>
                        <p>Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Provident eius eaque
                          aspernatur amet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 benifit-content">
                  <div className="benifit__item "
                    data-aos-delay="100">
                    <div className="benifit__item-inner">
                      <div className="benifit__item-thumb">
                        <img src={work1} alt="Benifit image" />
                      </div>
                      <div className="benifit__item-content">
                        <h4>Stack Pad</h4>
                        <p>Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Provident eius eaque
                          aspernatur amet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 benifit-content">
                  <div className="benifit__item "
                    data-aos-delay="200">
                    <div className="benifit__item-inner">
                      <div className="benifit__item-thumb">
                        <img src={work1} alt="Benifit image" />
                      </div>
                      <div className="benifit__item-content">
                        <h4>Multi Layer</h4>
                        <p>Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Provident eius
                          eaque aspernatur amet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 benifit-content">
                  <div className="benifit__item "
                    data-aos-delay="300">
                    <div className="benifit__item-inner">
                      <div className="benifit__item-thumb">
                        <img src={work1} alt="Benifit image" />
                      </div>
                      <div className="benifit__item-content">
                        <h4>Elite Projects</h4>
                        <p>Lorem ipsum dolor, sit amet consec tetur adipisicing elit. Provident eius eaque
                          aspernatur amet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </section>

      {/* <section className="token padding-top padding-bottom shape-fadeBlob--left">
        <div className="container">
          <div className="section-header section-header--left">
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

                <AnimationOnScroll animateIn="animate__fadeInLeft">
                  <div className="token__info " data-aos="fade-right" data-aos-duration="800">
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
                </AnimationOnScroll>

              </div>
              <div className="col-lg-6">

                <AnimationOnScroll animateIn="animate__fadeInRight">
                  <div className="token__allocation  bg--shade1 " data-aos="fade-left"
                    data-aos-duration="800">
                    <div className="token__allocation-inner text-center">
                      <h4 className="mb-4">Sale Proceed Allocation</h4>
                      <div className="token__allocation-thumb">
                        <img src={Graph} alt="Tokenomics Image" />
                      </div>
                    </div>
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section class="faq padding-bottom" id="faq">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div class="container">
            <div class="section-header section-header--middle">
              <div class="section-header__content">
                <div class="section-header__titlebar">
                  <p class="section-header__subtitle"> Faq</p>
                  <h2 class="section__header__title"> Common Queries</h2>
                </div>
              </div>
            </div>
            <div class="faq__wrapper aos-init" data-aos="fade-up" data-aos-duration="1000">
              <Tabs
                defaultActiveKey="General Questions"
                id="uncontrolled-tab-example"
                className="faq__tab nav nav-pills mb-5" >
                <Tab eventKey="General Questions" title="General Questions">
                  <div class="tab-content faq__content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
                      <div class="row gy-3 gx-5">
                        <div class="col-lg-6">
                          <Accordion class="accordion accordion-flush" id="accordionGeneral1" defaultActiveKey="0">
                            <Accordion.Item class="accordion-item" eventKey="0">
                              <Accordion.Header class="accordion-header" id="general-headingOne">
                                Initial IDO Launching Platforms
                              </Accordion.Header>
                              <Accordion.Body id="general-collapseOne" class="accordion-collapse collapse show" aria-labelledby="general-headingOne" data-bs-parent="#accordionGeneral1">
                                <div class="accordion-body">Fundamentally seller sells their currency to
                                  gain cash and a buyer buys
                                  expecting hold the currency until value increases in dollar/rupee terms
                                  In mid-August 202 total market value of all cryptocurrency exceeded
                                  $2 trillion, with Bitcoin alone making up 44% of that.
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item class="accordion-item" eventKey="1">
                              <Accordion.Header class="accordion-header" id="general-headingTwo">
                                Initial IDO Launching Platforms
                              </Accordion.Header>
                              <Accordion.Body id="general-collapseTwo" class="accordion-collapse collapse" aria-labelledby="general-headingTwo" data-bs-parent="#accordionGeneral2">
                                <div class="accordion-body">Fundamentally seller sells their currency to
                                  gain cash and a buyer buys
                                  expecting hold the currency until value increases in dollar/rupee terms
                                  In mid-August 202 total market value of all cryptocurrency exceeded
                                  $2 trillion, with Bitcoin alone making up 44% of that.
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item class="accordion-item" eventKey="2">
                              <Accordion.Header class="accordion-header" id="general-headingOneThree">
                                Initial IDO Launching Platforms
                              </Accordion.Header>
                              <Accordion.Body id="general-collapseOneThree" class="accordion-collapse collapse" aria-labelledby="general-headingOneThree" data-bs-parent="#accordionGeneralOneThree">
                                <div class="accordion-body">Fundamentally seller sells their currency to
                                  gain cash and a buyer buys
                                  expecting hold the currency until value increases in dollar/rupee terms
                                  In mid-August 202 total market value of all cryptocurrency exceeded
                                  $2 trillion, with Bitcoin alone making up 44% of that.
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                        <div class="col-lg-6">
                          <Accordion class="accordion accordion-flush" id="accordionGeneral3">
                            <Accordion.Item class="accordion-item" eventKey="3">
                              <Accordion.Header class="accordion-header" id="general-headingThree">
                                Initial IDO Launching Platforms
                              </Accordion.Header>
                              <Accordion.Body id="general-collapseThree" class="accordion-collapse collapse" aria-labelledby="general-headingThree" data-bs-parent="#accordionGeneral3">
                                <div class="accordion-body">Fundamentally seller sells their currency to
                                  gain cash and a buyer buys
                                  expecting hold the currency until value increases in dollar/rupee terms
                                  In mid-August 202 total market value of all cryptocurrency exceeded
                                  $2 trillion, with Bitcoin alone making up 44% of that.
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item class="accordion-item" eventKey="4">
                              <Accordion.Header class="accordion-header" id="general-heading4">
                                Initial IDO Launching Platforms
                              </Accordion.Header>
                              <Accordion.Body id="general-collapseFour" class="accordion-collapse collapse" aria-labelledby="general-heading4" data-bs-parent="#accordionGeneral4">
                                <div class="accordion-body">Fundamentally seller sells their currency to
                                  gain cash and a buyer buys
                                  expecting hold the currency until value increases in dollar/rupee terms
                                  In mid-August 202 total market value of all cryptocurrency exceeded
                                  $2 trillion, with Bitcoin alone making up 44% of that.
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item class="accordion-item" eventKey="5">
                              <Accordion.Header class="accordion-header" id="general-heading5">
                                Initial IDO Launching Platforms
                              </Accordion.Header>
                              <Accordion.Body id="general-collapseFive" class="accordion-collapse collapse" aria-labelledby="general-heading5" data-bs-parent="#accordionGeneral5">
                                <div class="accordion-body">Fundamentally seller sells their currency to
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
                  <div class="tab-pane fade show active" id="pills-token" role="tabpanel" aria-labelledby="pills-token-tab">
                    <div class="row gy-3 gx-5">
                      <div class="col-lg-6">
                        <Accordion class="accordion accordion-flush" id="accordionGeneral6">
                          <Accordion.Item class="accordion-item" eventKey="6">
                            <Accordion.Header class="accordion-header" id="general-headingsix">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapseSix" class="accordion-collapse collapse" aria-labelledby="general-headingSix" data-bs-parent="#accordionGeneral6">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="7">
                            <Accordion.Header class="accordion-header" id="general-heading7">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapseSeven" class="accordion-collapse collapse" aria-labelledby="general-heading7" data-bs-parent="#accordionGeneral7">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="8">
                            <Accordion.Header class="accordion-header" id="general-heading8">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapseEight" class="accordion-collapse collapse" aria-labelledby="general-heading8" data-bs-parent="#accordionGeneral1">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                      <div class="col-lg-6">
                        <Accordion class="accordion accordion-flush" id="accordionGeneral9">
                          <Accordion.Item class="accordion-item" eventKey="9">
                            <Accordion.Header class="accordion-header" id="general-headingNine">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapseNine" class="accordion-collapse collapse" aria-labelledby="general-headingNine" data-bs-parent="#accordionGeneral9">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="10">
                            <Accordion.Header class="accordion-header" id="general-heading10">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapseTen" class="accordion-collapse collapse" aria-labelledby="general-heading10" data-bs-parent="#accordionGeneral10">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="11">
                            <Accordion.Header class="accordion-header" id="general-heading11">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapseEleven" class="accordion-collapse collapse" aria-labelledby="general-heading11" data-bs-parent="#accordionGeneral11">
                              <div class="accordion-body">Fundamentally seller sells their currency to
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
                  <div class="tab-pane fade show active" id="pills-investor" role="tabpanel" aria-labelledby="pills-investor-tab">
                    <div class="row gy-3 gx-5">
                      <div class="col-lg-6">
                        <Accordion class="accordion accordion-flush" id="accordionGeneral12">
                          <Accordion.Item class="accordion-item" eventKey="12">
                            <Accordion.Header class="accordion-header" id="general1-heading12">
                              What is IDO Launching?
                            </Accordion.Header>
                            <Accordion.Body id="general1-collapse12" class="accordion-collapse collapse" aria-labelledby="general1-heading12" data-bs-parent="#accordionGeneral12">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="13">
                            <Accordion.Header class="accordion-header" id="general-heading13">
                              What is IDO Launching?
                            </Accordion.Header>
                            <Accordion.Body id="general-collapse13" class="accordion-collapse collapse" aria-labelledby="general-heading13" data-bs-parent="#accordionGeneral13">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="14">
                            <Accordion.Header class="accordion-header" id="general-heading14">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapse14" class="accordion-collapse collapse" aria-labelledby="general-heading14" data-bs-parent="#accordionGeneral14">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                      <div class="col-lg-6">
                        <Accordion class="accordion accordion-flush" id="accordionGeneral15">
                          <Accordion.Item class="accordion-item" eventKey="15">
                            <Accordion.Header class="accordion-header" id="general1-heading15">
                              What is IDO Launching?
                            </Accordion.Header>
                            <Accordion.Body id="general1-collapse15" class="accordion-collapse collapse" aria-labelledby="general1-heading15" data-bs-parent="#accordionGeneral15">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="16">
                            <Accordion.Header class="accordion-header" id="general-heading16">
                              How can I launch an IDO in Torkgo
                            </Accordion.Header>
                            <Accordion.Body id="general-collapse16" class="accordion-collapse collapse" aria-labelledby="general-heading16" data-bs-parent="#accordionGeneral16">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="17">
                            <Accordion.Header class="accordion-header" id="general-heading17">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapse17" class="accordion-collapse collapse" aria-labelledby="general-heading17" data-bs-parent="#accordionGeneral17">
                              <div class="accordion-body">Fundamentally seller sells their currency to
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
                  <div class="tab-pane fade show active" id="pills-security" role="tabpanel" aria-labelledby="pills-security-tab">
                    <div class="row gy-3 gx-5">
                      <div class="col-lg-6">
                        <Accordion class="accordion accordion-flush" id="accordionGeneral18">
                          <Accordion.Item class="accordion-item" eventKey="18">
                            <Accordion.Header class="accordion-header" id="general1-heading18">
                              What is IDO Launching?
                            </Accordion.Header>
                            <Accordion.Body id="general1-collapse18" class="accordion-collapse collapse" aria-labelledby="general1-heading18" data-bs-parent="#accordionGeneral15">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="19">
                            <Accordion.Header class="accordion-header" id="general-heading19">
                              How can I launch an IDO in Torkgo
                            </Accordion.Header>
                            <Accordion.Body id="general-collapse19" class="accordion-collapse collapse" aria-labelledby="general-heading19" data-bs-parent="#accordionGeneral19">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="20">
                            <Accordion.Header class="accordion-header" id="general-heading20">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapse20" class="accordion-collapse collapse" aria-labelledby="general-heading20" data-bs-parent="#accordionGeneral20">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                      <div class="col-lg-6">
                        <Accordion class="accordion accordion-flush" id="accordionGeneral21">
                          <Accordion.Item class="accordion-item" eventKey="21">
                            <Accordion.Header class="accordion-header" id="general1-heading21">
                              What is IDO Launching?
                            </Accordion.Header>
                            <Accordion.Body id="general1-collapse21" class="accordion-collapse collapse" aria-labelledby="general1-heading21" data-bs-parent="#accordionGeneral15">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="22">
                            <Accordion.Header class="accordion-header" id="general-heading22">
                              How can I launch an IDO in Torkgo
                            </Accordion.Header>
                            <Accordion.Body id="general-collapse22" class="accordion-collapse collapse" aria-labelledby="general-heading22" data-bs-parent="#accordionGeneral22">
                              <div class="accordion-body">Fundamentally seller sells their currency to
                                gain cash and a buyer buys
                                expecting hold the currency until value increases in dollar/rupee terms
                                In mid-August 202 total market value of all cryptocurrency exceeded
                                $2 trillion, with Bitcoin alone making up 44% of that.
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item class="accordion-item" eventKey="23">
                            <Accordion.Header class="accordion-header" id="general-heading23">
                              Initial IDO Launching Platforms
                            </Accordion.Header>
                            <Accordion.Body id="general-collapse23" class="accordion-collapse collapse" aria-labelledby="general-heading23" data-bs-parent="#accordionGeneral23">
                              <div class="accordion-body">Fundamentally seller sells their currency to
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
        </AnimationOnScroll>
      </section> */}
      <section className="cta padding-top padding-bottom  apply-for-ido" >
        <div className="container">
          <div className="cta__wrapper">
            <div className="cta__content">
              <p className="section-header__subtitle"> Have any Project?</p>
              <h2 className="section__header__title"> Apply For IDO/INO</h2>
              {/* <Link to="/apply-project" className="default-btn"><span>Apply to
                  launch</span></Link> */}
              <button onClick={onClikRedirect} className="default-btn"><span>Apply to
                launch</span></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

