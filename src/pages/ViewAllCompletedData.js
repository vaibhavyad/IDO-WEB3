import React from 'react'
import '../styles/style.css'
import "../styles/animate.min.css";
import "../styles/slick.css";
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { usePoolContext } from "../context/poolContext";
import { Badge } from "react-bootstrap";
import IconImg from '../assets/images/eth.png';
import ProjectCircle from '../assets/images/project-circle.png'
import { Link, useNavigate } from 'react-router-dom';

const ViewAllCompletedData = () => {
  const navigate = useNavigate()
  const contract = useSelector((state) => state.contract);
  const { allPools } = usePoolContext();
  let data = [];
  Object.keys(allPools).map((item) => {
    if ((parseInt(allPools[item].end) < parseInt(Date.now() / 1000))) {
      data.push(allPools[item])
    }
  });
  
  const directpage = (items) => {
    navigate("/project-detail/" + items.idoAddress)
  }
  return (
    <>
      <section className="page-header w-100">
        <div className="container">
          <div className="page-header__content text-center">
            <div className="section-header section-header--middle">
              <div className="section-header__content">
                <div className="section-header__titlebar">
                  <h2 className="section__header__title">Completed IDOs</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="project completed-project padding_upcoming project-two-completed">
        <div className="container">

          <div className="project__wrapper">
            <div className="swiper project__slidered py-2">

              {
                data.length ?
                  <div className="swiper-wrappered w-100 second-project-wrap">

                    {
                      data.map((items, index) => {
                        return (
                          <div className="swiper-slided" key={index}>
                            <div className="project__item project__item--completed1">
                              <div className="project__item-inner">
                                <div className="project__item-thumb">
                                  <img src={items.metadata.image2} alt="IGO cover" />
                                  <span className="badge"><img src={IconImg}
                                    alt="chain logo" /></span>
                                </div>
                                <div className="project__item-content">
                                  <div className="project__item-top">
                                    <div className="project__item-author">
                                      <Link to="/"><img src={items.metadata.image}
                                        alt="author image" /></Link>
                                      <h4>{items.tokenName}</h4>
                                      {items.tokenSymbol ? <p>{items.tokenSymbol}</p> : null}
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
                                      {/* <p class="project__infolist-name">Project Start</p> */}
                                      <p class="project__infolist-name">00:00:00:00</p>
                                      {parseInt(items.end) < parseInt(Date.now() / 1000) ? (
                                        <Badge bg="secondary">Ended</Badge>
                                      ) : parseInt(items.start) < parseInt(Date.now() / 1000) ? (
                                        <Badge bg="success">Started</Badge>
                                      ) : (
                                        <Badge bg="secondary">Not started</Badge>
                                      )
                                      }
                                    </li>
                                  </ul>
                                  <div className="project__item-middle">
                                    <div className="project__item-amount description_details">
                                      <h4>Description</h4>
                                      <p>{items.metadata.description}...</p>
                                    </div>
                                  </div>
                                  <div className="project__item-bottom">
                                    <button onClick={() => directpage(items)}
                                      className="default-btn default-btn--small">View Details</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                  : <Loader />
              }

              <div className="project__slider-pagination mt-4 text-center"></div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </section >
    </>
  )
}

export default ViewAllCompletedData