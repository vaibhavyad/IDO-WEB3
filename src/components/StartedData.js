import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/animate.min.css";
import "../styles/slick.css";
import { usePoolContext } from "../context/poolContext";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Badge } from "react-bootstrap";
import IconImg from '../assets/images/eth.png';
import ProjectCircle from '../assets/images/project-circle.png';
import Loader from '../components/Loader';
import Countdown from 'react-countdown';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
const StartedData = () => {
    const navigate = useNavigate()
    const [data1, setData1] = useState([]);
    const [currentItem, setCurrentItem] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [item, setItem] = useState(0);
    const itemsPerPage = 3;
    const contract = useSelector((state) => state.contract);
    const { allPools } = usePoolContext();

    // Started Data

    let startedData;
    useEffect(() => {
        if (Object.keys(allPools).length) {
            startedData = [];
            Object.keys(allPools).map((item) => {
                if (!(parseInt(allPools[item].start) >= parseInt(Date.now() / 1000)) && (parseInt(allPools[item].end) >= parseInt(Date.now() / 1000))) {
                    startedData.push(allPools[item])

                }
            });
        }
        setData1(startedData)
    }, [allPools])

    useEffect(() => {
        const preveious = item + itemsPerPage
        setCurrentItem(data1?.slice(item, preveious))
        setPageCount(Math.ceil(data1?.length / itemsPerPage))
    }, [item, data1])

    const redirectStartaPage = (element) => {
        navigate("/project-detail/" + element.idoAddress)
    }
    const handlePeginationClick = (e) => {
        const newItem = (e.selected * itemsPerPage) % data1.length
        setItem(newItem);
    };

    return (

        <>
            <div className="project__wrapper">
                <div className="swiper project__slidered py-2">
                    {
                        currentItem?.length ?
                            <div className="swiper-wrappered w-100 second-project-wrap">

                                {currentItem?.map(((element, index) => {

                                    return (
                                        <div className="swiper-slided" key={index}>
                                            <div className="project__item project__item--completed1">

                                                <div className="project__item-inner" >
                                                    <div className="project__item-thumb">
                                                        <img src={element.metadata.image2} alt="IGO cover" />
                                                        <span className="badge"><img src={IconImg}
                                                            alt="chain logo" /></span>
                                                    </div>
                                                    <div className="project__item-content">
                                                        <div className="project__item-top">
                                                            <div className="project__item-author">
                                                                <Link to="/"><img src={element.metadata.image}
                                                                    alt="author image" /></Link>
                                                                <h4>{element.tokenName}</h4>
                                                                {element.tokenSymbol ? <p>${element.tokenSymbol}</p> : null}
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
                                                                <p className="project__infolist-name">
                                                                    {
                                                                        element.start < Date.now() / 1000 ?
                                                                            (
                                                                                element.end < Date.now() / 1000 ? (

                                                                                    <>
                                                                                        <p>ended</p>
                                                                                        <Countdown
                                                                                            date={parseInt(element.end) * 1000}
                                                                                        />
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        <p> Start</p>
                                                                                        <Countdown
                                                                                            date={parseInt(element.end) * 1000}
                                                                                        />
                                                                                    </>
                                                                                )
                                                                            )
                                                                            : (
                                                                                (
                                                                                    <>
                                                                                        <p>Not yet Started</p>
                                                                                        <Countdown
                                                                                            date={parseInt(element.start) * 1000}
                                                                                        />
                                                                                    </>
                                                                                )
                                                                            )
                                                                    }
                                                                </p>
                                                                {parseInt(element.end) < parseInt(Date.now() / 1000) ? (
                                                                    <Badge bg="secondary">Ended</Badge>
                                                                ) : parseInt(element.start) < parseInt(Date.now() / 1000) ? (
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
                                                                <p>{element.metadata.description}...</p>
                                                            </div>
                                                        </div>
                                                        <div className="project__item-bottom">
                                                        </div>
                                                        <button
                                                            onClick={() => redirectStartaPage(element)}
                                                            className="default-btn default-btn--small">View Details</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    )
                                }))}

                            </div>
                            :
                            !Object.keys(allPools).length && <div className='loader-wrap center-loader'>
                                <Loader />
                            </div>
                    }
                    {
                        Object.keys(allPools).length ?
                            <div className="text-center mt-5">
                            </div> : null
                    }
                    {
                        Object.keys(allPools).length && !(currentItem?.length) ? <h3>Running Projects are not available</h3> : null
                    }

                    <div className="project__slider-pagination mt-4 text-center"></div>
                </div>
            </div>
            <div>
                <ul className="pagination mt-5 justify-content-center">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePeginationClick}
                        pageRangeDisplayed={1}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        pageClassName="page-item"
                        pageLinkClassName='page-link'
                        previousClassName='page-item'
                        previousLinkClassName='page-link'
                        nextClassName="page-item"
                        nextLinkClassName='page-link'
                        breakClassName='page-item'
                        breakLinkClassName='page-link'
                        containerClassName='pagination'
                        activeClassName='active'
                    />
                </ul>
            </div>
        </>
    )
}

export default StartedData