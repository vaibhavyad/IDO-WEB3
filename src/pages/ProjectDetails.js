import { Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../styles/animate.min.css";
import { useParams } from 'react-router-dom';
import { usePoolContext } from "../context/poolContext";
import { useDispatch, useSelector } from 'react-redux';
import BigNumber from "bignumber.js";
import { Badge } from "react-bootstrap";
import Countdown from "react-countdown";
import { TextField } from '@material-ui/core';
import * as s from ".././styles/global";
import { fetchData } from '../redux/data/dataActions';
import IDOPool from "../contracts/IDOPool.json";
import Loader from '../components/Loader';

const ProjectDetail = () => {
    const { idoAddress } = useParams();
    // console.log("idoAddress",idoAddress)
    const dispatch = useDispatch();
    const [price, setPrice] = useState("0");
    const [item, setItem] = useState()
    const [socialLink, setSocialLink] = useState('www.sociallinks.com')
    const [loading, setLoading] = useState(false);
    const contract = useSelector((state) => state.contract);
    const blockchain = useSelector((state) => state.blockchain);
    const currency = " " + process.env.REACT_APP_CURRENCY;
    const { allPools } = usePoolContext();

    let data = [];
    Object.keys(allPools).map((items) => {
        data.push(allPools[items])
    });
    // console.log("data>>>",data)

    useEffect(() => {
        data.forEach((element) => {
            if (element.idoAddress == idoAddress) {
                setItem(element)
            }
        });
    }, [data])

    useEffect(() => {
    }, [allPools])

    const web3 = blockchain.web3;

    const claimToken = async () => {
        setLoading(true);
        const web3 = blockchain.web3;
        try {
            const IDOPoolContract = await new web3.eth.Contract(
                IDOPool.abi,
                idoAddress
            );

            IDOPoolContract.methods
                .claim()
                .send({
                    from: blockchain.account,
                })
                .once("error", (err) => {
                    setLoading(false);
                    console.log(err);
                })
                .then((receipt) => {
                    setLoading(false);
                    console.log(receipt);
                    dispatch(fetchData(blockchain.account));
                });
        } catch (err) {
            console.log(err);
        }

    };

    const refund = async () => {
        setLoading(true);
        const web3 = blockchain.web3;
        try {
            const IDOPoolContract = await new web3.eth.Contract(
                IDOPool.abi,
                idoAddress
            );

            IDOPoolContract.methods
                .claimETH()
                .send({
                    from: blockchain.account,
                })
                .once("error", (err) => {
                    setLoading(false);
                    console.log(err);
                })
                .then((receipt) => {
                    setLoading(false);
                    console.log(receipt);
                    dispatch(fetchData(blockchain.account));
                });
        } catch (err) {
            console.log(err);
        }

    };
    const buyToken = async (amount) => {
        setLoading(true);
        const web3 = blockchain.web3;
        try {
            const IDOPoolContract = await new web3.eth.Contract(
                IDOPool.abi,
                idoAddress
            );

            IDOPoolContract.methods
                .pay()
                .send({
                    from: blockchain.account,
                    value: amount,
                })
                .once("error", (err) => {
                    setLoading(false);
                    console.log(err);
                })
                .then((receipt) => {
                    setLoading(false);
                    console.log(receipt);
                    dispatch(fetchData(blockchain.account));
                });
        } catch (err) {
            console.log(err);
        }
    };

    const withdrawETH = async () => {
        setLoading(true);
        const web3 = blockchain.web3;
        try {
            const IDOPoolContract = await new web3.eth.Contract(
                IDOPool.abi,
                idoAddress
            );

            const isNeedLocker = parseInt(item?.claim) > parseInt(Date.now() / 1000);
            const lockerFactory = blockchain.LockerFactory;
            IDOPoolContract.methods
                .withdrawETH()
                .send({
                    from: blockchain.account,
                    value: isNeedLocker ? await lockerFactory?.methods?.fee().call() : 0,
                })
                .once("error", (err) => {
                    setLoading(false);
                    console.log(err);
                })
                .then((receipt) => {
                    setLoading(false);
                    console.log(receipt);
                    dispatch(fetchData(blockchain.account));
                });
        } catch (err) {
            console.log(err);
        }
    }
    const withdrawToken = async () => {
        setLoading(true);
        const web3 = blockchain.web3;
        try {
            const IDOPoolContract = await new web3.eth.Contract(
                IDOPool.abi,
                idoAddress
            );

            IDOPoolContract.methods
                .withdrawTokenCancel()
                .send({
                    from: blockchain.account,
                })
                .once("error", (err) => {
                    setLoading(false);
                    console.log(err);
                })
                .then((receipt) => {
                    setLoading(false);
                    console.log(receipt);
                    dispatch(fetchData(blockchain.account));
                });
        } catch (err) {
            console.log(err);
        }
    }
    const withdrawUnsoldToken = async () => {
        setLoading(true);
        const web3 = blockchain.web3;
        try {
            const IDOPoolContract = await new web3.eth.Contract(
                IDOPool.abi,
                idoAddress
            );

            IDOPoolContract.methods
                .withdrawNotSoldTokens()
                .send({
                    from: blockchain.account,
                })
                .once("error", (err) => {
                    setLoading(false);
                    console.log(err);
                })
                .then((receipt) => {
                    setLoading(false);
                    console.log(receipt);
                    dispatch(fetchData(blockchain.account));
                });
        } catch (err) {
            console.log(err);
        }
    }
    const isStarted = parseInt(item?.start) < (parseInt(Date.now() / 1000));
    const hasEnded = parseInt(item?.end) < (parseInt(Date.now() / 1000));
    return (
        <>

            <div className="banner-section">
                <img src={item?.metadata?.image2} alt="banner-img" />
            </div>

            < section className="pro-details padding-top padding-bottom w-100" >
                <div className="container">

                    {
                        data?.length ? (
                            <div className="pro-details__wrapper">
                                <div className="pro-details__block mb-4">
                                    <div className="pro-details__block-inner">
                                        <div className="row g-5 align-items-center">
                                            <div className="col-lg-7">
                                                <div className="pro-details__item-wrap">
                                                    <div className="pro-details__item">
                                                        <div className="pro-details__item-thumb image-pro_resize">
                                                            <img src={item?.metadata?.image} alt="IGO Project" />
                                                        </div>
                                                        <div className="pro-details__item-content product_description">
                                                            <h4>{item?.tokenName} <span>({item?.tokenSymbol ? `$${item?.tokenSymbol}` : null})</span></h4>
                                                            <p>{item?.metadata.description}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="pro-details__info">
                                                    <div className="row g-3">
                                                        <div className="col-sm-6">
                                                            <div className="pro-details__info-item">
                                                                <h6 className="pro-details__info-name">
                                                                    Total Supply
                                                                </h6>
                                                                <p className="pro-details__info-value">
                                                                    {BigNumber(item?.totalSupply)
                                                                        .dividedBy(10 ** parseInt(item?.tokenDecimals))
                                                                        .toFormat()}{" "}
                                                                    {item?.tokenSymbol}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="pro-details__info-item">
                                                                <h6 className="pro-details__info-name">
                                                                    {/* FDV */}
                                                                    Token Price :

                                                                </h6>
                                                                <p className="pro-details__info-value">
                                                                    30M USD
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="pro-details__info-item">
                                                                <h6 className="pro-details__info-name">
                                                                    Initial Supply

                                                                </h6>
                                                                <p className="pro-details__info-value">
                                                                    1,300,000,0 Bzon
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="pro-details__info-item">
                                                                <h6 className="pro-details__info-name">
                                                                    Initial Market Cap

                                                                </h6>
                                                                <p className="pro-details__info-value">
                                                                    6.48M USD
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pro-details__desc">
                                    <div className="row flex-lg-row-reverse g-5">
                                        <div className="col-lg-8">
                                            <div className="pro-details__desc-content">
                                                <div data-bs-spy="scroll" data-bs-target="#pro-details-navlist"
                                                    data-bs-smooth-scroll="true" data-bs-root-margin="0px 0px -60%"
                                                    className="scrollspy-example" tabIndex="0">
                                                    <section id="pro-details-about">
                                                        <section id="pro-details-token">
                                                            <h4>Token Details</h4>
                                                            <p>{data?.metadata?.description}</p>
                                                            <div className="pro-details__token-info mt-4">

                                                                <ul className="pro-details__tokenlist">
                                                                    <li className="pro-details__tokenlist-item symbol-data">
                                                                        {/* <i classNamefa-solid fa-dice-d6"></i> */}

                                                                        <p>{item?.tokenName}</p>
                                                                        {item?.tokenSymbol ? <p>{item.tokenSymbol}</p> : null}
                                                                    </li>
                                                                    <li className="pro-details__tokenlist-item" style={{ display: "flex", justifyContent: "space-between" }}>

                                                                        <p>
                                                                            <i className="fa-solid fa-dice-d6"></i>
                                                                            TOKEN ADDRESS</p>
                                                                        <p> {item?.tokenAddress}</p>
                                                                    </li>
                                                                    <li className="pro-details__tokenlist-item" style={{ display: "flex", justifyContent: "space-between" }}>

                                                                        <p>
                                                                            <i className="fa-solid fa-dice-d6"></i>
                                                                            DECIMALS</p>
                                                                        <p>{item?.tokenDecimals}</p>
                                                                    </li>
                                                                    <li className="pro-details__tokenlist-item" style={{ display: "flex", justifyContent: "space-between" }}>
                                                                        <p> <i className="fa-solid fa-dice-d6"></i>
                                                                            TOTAL SUPPLY</p>
                                                                        {/* <p>{item?.totalSupply}  {item?.tokenSymbol ? `$${item?.tokenSymbol}` : null}</p> */}

                                                                        {item && BigNumber(item?.totalSupply)
                                                                            .dividedBy(10 ** parseInt(item?.tokenDecimals))
                                                                            .toFormat()}{" "}
                                                                        {item?.tokenSymbol}
                                                                    </li>

                                                                </ul>
                                                            </div>

                                                        </section>
                                                        <div className="buytoken-wrap">
                                                            <h4>BUY TOKEN</h4>

                                                            <s.Container fd="row" jc="space-between" style={{ marginTop: 10 }}>
                                                                <s.Card style={{ padding: 0, backgroundColor: 'transparent' }}>
                                                                    <s.TextID>{"Minimum" + currency}</s.TextID>
                                                                    <s.TextDescription>
                                                                        {item && BigNumber(contract.web3.utils.fromWei(item?.min)).toFormat(2)}
                                                                    </s.TextDescription>
                                                                </s.Card>
                                                                <s.Card style={{ padding: 0, backgroundColor: 'transparent' }}>
                                                                    <s.TextID>Maximum{currency}</s.TextID>
                                                                    <s.TextDescription>
                                                                        {item && BigNumber(contract.web3.utils.fromWei(item?.max)).toFormat(2)}
                                                                    </s.TextDescription>
                                                                </s.Card>
                                                            </s.Container>
                                                            <s.Container fd="row" jc="space-between" ai="center">
                                                                <s.Container flex={4}>
                                                                    <s.TextID>To claim</s.TextID>
                                                                    <s.TextDescription>
                                                                        {item && BigNumber(item?.userData?.debt)
                                                                            .dividedBy(10 ** item?.tokenDecimals)
                                                                            .toFixed(2) +
                                                                            " $" +
                                                                            item.tokenSymbol}
                                                                    </s.TextDescription>
                                                                </s.Container>
                                                                <s.Container flex={1}>
                                                                    <s.button className='resize-btn'
                                                                        disabled={
                                                                            Date.now() / 1000 < BigNumber(item?.end) ||
                                                                            BigNumber(item?.userData.debt).lte(0)
                                                                        }
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            claimToken();
                                                                        }}
                                                                    >
                                                                        CLAIM
                                                                    </s.button>
                                                                </s.Container>
                                                            </s.Container>
                                                            <s.Container fd="row" jc="space-between" ai="center">
                                                                <s.Container flex={4}>
                                                                    {/* <s.TextID>My invested {process.env.REACT_APP_CURRENCY}</s.TextID> */}
                                                                    <s.TextDescription>
                                                                        {item && BigNumber(contract.web3.utils.fromWei(item?.totalInvestedETH)).toFormat(
                                                                            2
                                                                        ) + currency}
                                                                    </s.TextDescription>
                                                                </s.Container>
                                                                <s.Container flex={1}>
                                                                    <s.button className='resize-btn'
                                                                        disabled={
                                                                            !hasEnded ||
                                                                            BigNumber(item.totalInvestedETH).gte(
                                                                                BigNumber(item.softCap)
                                                                            ) ||
                                                                            BigNumber(item.userData.totalInvestedETH).lte(0)
                                                                        }
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            refund();
                                                                        }}
                                                                    >
                                                                        REFUND
                                                                    </s.button>
                                                                </s.Container>
                                                            </s.Container>
                                                            <p className='progress-demo'>Progress</p>
                                                            <s.Container className='buy-align' flex={1} ai="flex-end">
                                                                <s.Container flex={4} style={{ marginRight: 20 }}>
                                                                    <TextField className='buy-border input-bg buy-with-input'
                                                                        fullWidth
                                                                        label={"Buy with" + currency}
                                                                        type={"tel"}
                                                                        onChange={(e) => {
                                                                            e.preventDefault();
                                                                            let val = BigNumber(e.target.value).absoluteValue().toFixed();
                                                                            if (!isNaN(val)) {
                                                                                setPrice(contract.web3.utils.toWei(val));
                                                                            } else {
                                                                                setPrice("0");
                                                                            }
                                                                        }}
                                                                    ></TextField>
                                                                </s.Container>
                                                                <s.Container flex={1} ai="flex-end">
                                                                    <s.button className='resize-btn'
                                                                        disabled={
                                                                            BigNumber(price).gt(
                                                                                BigNumber(item?.max).minus(
                                                                                    BigNumber(item?.userData?.totalInvestedETH)
                                                                                )
                                                                            ) ||
                                                                            BigNumber(item?.max).lte(
                                                                                BigNumber(item?.userData.totalInvestedETH)
                                                                            ) ||
                                                                            BigNumber(price).lt(BigNumber(item?.min)) ||
                                                                            BigNumber(price)
                                                                                .dividedBy(BigNumber(item?.price))
                                                                                .times(BigNumber(10 ** item?.tokenDecimals))
                                                                                .plus(BigNumber(item?.toDistributed))
                                                                                .gt(BigNumber(item?.maxDistributed)) ||
                                                                            price == "0" ||
                                                                            hasEnded ||
                                                                            !isStarted
                                                                        }
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            buyToken(price);
                                                                        }}
                                                                    >
                                                                        BUY
                                                                    </s.button>
                                                                </s.Container>
                                                            </s.Container>
                                                        </div>

                                                        <div className="buytoken-wrap">
                                                            <h4>You will recieve</h4>
                                                            {item && BigNumber(item?.tokenRate)
                                                                .dividedBy(BigNumber(10).pow(BigNumber(item?.tokenDecimals)))
                                                                .times(BigNumber(contract.web3.utils.fromWei(price)))
                                                                .toFormat(2)}
                                                            {" " + item?.tokenSymbol}
                                                            <div className='withdraw_align'>
                                                                <s.TextTitle>WITHDRAW</s.TextTitle>
                                                                <s.TextID>(Pool owner only)</s.TextID>
                                                                <s.SpacerSmall />
                                                                {
                                                                    !hasEnded && (
                                                                        <s.Container fd="row" ai="center" jc="space-between">
                                                                            <s.Container flex={3}>
                                                                                <s.TextID>Can withdraw in</s.TextID>
                                                                            </s.Container>

                                                                            {
                                                                                item && (
                                                                                    <Countdown date={item?.end * 1000} />
                                                                                )
                                                                            }
                                                                        </s.Container>
                                                                    )
                                                                }
                                                                <s.SpacerMedium />
                                                                <s.Container fd="row" ai="center" jc="space-between">
                                                                    <s.Container flex={2}>
                                                                        <s.TextID>Total invested</s.TextID>
                                                                        <s.TextDescription>
                                                                            {item && BigNumber(web3.utils.fromWei(item?.balance)).toFixed(2) +
                                                                                " " +
                                                                                process.env.REACT_APP_CURRENCY}
                                                                        </s.TextDescription>
                                                                    </s.Container>
                                                                    <s.button className="resize-btn-widthdraw"
                                                                        disabled={
                                                                            !hasEnded ||
                                                                            BigNumber(item?.totalInvestedETH).lt(BigNumber(item?.softCap)) ||
                                                                            item?.balance == 0
                                                                        }
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            withdrawETH();
                                                                        }}
                                                                    >
                                                                        WITHDRAW
                                                                    </s.button>
                                                                </s.Container>
                                                                <s.Container fd="row" ai="center" jc="space-between">
                                                                    <s.Container flex={2}>
                                                                        <s.TextID>Unsold token</s.TextID>
                                                                        <s.TextDescription>
                                                                            {BigNumber(item?.unsold)
                                                                                .dividedBy(10 ** item?.tokenDecimals)
                                                                                .toFixed(2) +
                                                                                " " +
                                                                                item?.tokenSymbol}
                                                                        </s.TextDescription>
                                                                    </s.Container>
                                                                    {BigNumber(item?.totalInvestedETH).lt(BigNumber(item?.softCap)) ? (
                                                                        <s.button className="resize-btn-widthdraw widthdraw-token"
                                                                            disabled={
                                                                                !hasEnded ||
                                                                                !BigNumber(item?.totalInvestedETH).lt(BigNumber(item?.softCap)) ||
                                                                                (!item?.unsold || item?.unsold == "0")
                                                                            }
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                withdrawToken();
                                                                            }}
                                                                        >
                                                                            WITHDRAW ALL TOKEN
                                                                        </s.button>
                                                                    ) : (
                                                                        <s.button
                                                                            disabled={
                                                                                !hasEnded ||
                                                                                item?.balance > 0 ||
                                                                                (!item?.unsold || item?.unsold == "0")
                                                                            }
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                withdrawUnsoldToken();
                                                                            }}
                                                                        >
                                                                            WITHDRAW UNSOLD TOKEN
                                                                        </s.button>
                                                                    )}
                                                                </s.Container>
                                                            </div>
                                                        </div>


                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <aside>
                                                <div className="pro-details__desc-nav">
                                                    <div className="list-group bg--primary-color mb-4 pro-details-navlist" id="pro-details-navlist">
                                                        <Link to="/" className="list-group-item list-group-item-action">
                                                            <i className='about-icon list-icon'></i>Buy Token</Link>
                                                        <Link to="/" className="list-group-item list-group-item-action"> <i
                                                            className="icon-token list-icon"></i>Token</Link>

                                                    </div>

                                                    <div className="pro-details__links">
                                                        <div className="pro-details__links-item">
                                                            <div className="pro-details__links-title">
                                                                <h6>Social Media</h6>
                                                            </div>

                                                            <div className="pro-details__links-content">
                                                                <ul className="social">
                                                                    {
                                                                        item && Object.keys(item?.metadata?.links)?.map((test, index) => {
                                                                            return (
                                                                                <div key={index}>
                                                                                    <li className="social__item">
                                                                                        <button onClick={() => setSocialLink(item?.metadata?.links[test])} className="social__link"><i
                                                                                            className={`icon-${test} icon-social`}></i></button>
                                                                                    </li>
                                                                                    {/* <li className="social__item">
                                                                <button onClick={() => setSocialLink(item?.metadata?.links[test])}
                                                                    className="social__link"><i
                                                                        className="icon-discord icon-social"></i></button>
                                                            </li> */}
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>

                                                            </div>

                                                        </div>
                                                        <div className="pro-details__links-item pro-details-wrapper">
                                                            <div className="pro-details__links-title">
                                                                <h6>Website Link</h6>
                                                            </div>
                                                            <div className="pro-details__links-content pro-details-wrapper">
                                                                <a href={socialLink} className="pro-details__links-btn">{socialLink}<span><i
                                                                    className="icon-globe"></i></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        )
                            : <Loader />
                    }


                </div >
            </section >



        </>
    );
};

export default ProjectDetail;



