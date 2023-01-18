import React, { useEffect } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import "../styles/animate.min.css";
import { fetchContract } from "../staking/index"
import { useSelector } from 'react-redux';
import stakingAbi from "../contracts/stakingAbi.json";
import tokenAbi from "../contracts/ERC20.json";
import BigNumber from "bignumber.js";
import { useState } from 'react';
import Loader from '../components/Loader';

const Stacking = () => {
    const [amount, setAmount] = useState("0");
    const [rewardPerBlocks, setRewardPerBlock] = useState("0");
    const [rewardDebts, SetRewardDebts] = useState("0");
    const [pendingReward, SetpendingReward] = useState();
    const [totalStakedAmounts, SetTotalStakedAmounts] = useState("0");
    const [numberOfStacker, setNumberOfStacker] = useState("0");
    const [balance, setBalance] = useState("0");
    const [allowances, setAllowances] = useState(false);
    const [totalAmounts, SetTotalAmounts] = useState("0")
    const [loading, setLoading] = useState(true);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const blockchain = useSelector((state) => state.blockchain);
    const stakingContractAddress = "0xb65A1BB577A97De81914404A6A37F47CF18FC90e";
    const tokenContractAddress = "0xe83d3cE0e17fE96e1b391BA7A0e55D4B4C7B2761";

    const allowance = async (amounts) => {
        const web3 = blockchain.web3;
        const tokenContract = await new web3.eth.Contract(
            tokenAbi.abi,
            tokenContractAddress
        );
        let allowance = await tokenContract.methods.allowance(blockchain.account, stakingContractAddress).call()
        let approveAmount = amounts;
        console.log(Number(allowance.toString()));
        console.log(Number(approveAmount.toString()));
        if (Number(allowance.toString()) < Number(approveAmount.toString())) {
            setAllowances(true)
        } else {
            setAllowances(false)

        }
    }

    const approve = async (amounts) => {
        const web3 = blockchain.web3;
        const tokenContract = await new web3.eth.Contract(
            tokenAbi.abi,
            tokenContractAddress
        );
        let approveAmount = amounts;
        await tokenContract.methods.approve(stakingContractAddress, approveAmount).send({
            from: blockchain.account
        })
            .once("error", (err) => {
                setLoading(true);
                console.log("dddddd", err);
                console.log("hey I am rejected", err)
            })
            .then(async (receipt) => {
                setLoading(true);
                console.log("ttttt", receipt);

                // dispatch(fetchData(blockchain.account));

            });

    }

    const deposit = async (amounts) => {
        const web3 = blockchain.web3;
        // console.log("tokenContract", await tokenContract.methods.balanceOf(blockchain.account).call());

        const stakingContract = await new web3.eth.Contract(
            stakingAbi,
            stakingContractAddress
        );
        let amount_to_send = amounts;
        await stakingContract.methods.deposit(amount_to_send).send({
            from: blockchain.account
        })
            .once("error", (err) => {
                setLoading(false);
                console.log(err);
            })
            .then((receipt) => {
                setLoading(false);
                console.log(receipt);
                // dispatch(fetchData(blockchain.account));
            });


    }

    const withdraw = async (amounts) => {
        const web3 = blockchain.web3;
        const stakingContract = await new web3.eth.Contract(
            stakingAbi,
            stakingContractAddress
        );

        console.log("contract ====> ", stakingContract.methods);
        let amount_to_send = amounts;
        // console.log("amount_to_send", amount_to_send);
        let contract = await stakingContract.methods.withdraw(amount_to_send).send({
            from: blockchain.account
        })
            .once("error", (err) => {
                setLoading2(true);
                console.log(err);
            })
            .then((receipt) => {
                setLoading2(true);
                console.log(receipt);
                // dispatch(fetchData(blockchain.account));
            });
    }
    const claim = async () => {

        const web3 = blockchain.web3;

        const stakingContract = await new web3.eth.Contract(
            stakingAbi,
            stakingContractAddress
        );
        let contract = await stakingContract.methods.claim().send({
            from: blockchain.account
        })
            .once("error", (err) => {
                setLoading1(true);
                console.log(err);
            })
            .then((receipt) => {
                setLoading1(true);
                console.log(receipt);
                // dispatch(fetchData(blockchain.account));
            });
    }

    const rewardPerBlock = async () => {
        try {
            const web3 = blockchain.web3;
            const stakingContract = await new web3.eth.Contract(
                stakingAbi,
                stakingContractAddress
            );
            let data = await stakingContract.methods.rewardPerBlock().call();
            data = web3.utils.fromWei(data.toString())
            setRewardPerBlock(data.toString())

        } catch (error) {
            console.log(error);
        }
    }

    const userInfo = async () => {
        try {
            const web3 = blockchain.web3;

            const tokenContract = await new web3.eth.Contract(
                tokenAbi.abi,
                tokenContractAddress
            );
            let balance = await tokenContract.methods.balanceOf(blockchain.account).call();

            balance = web3.utils.fromWei(balance.toString())
            const stakingContract = await new web3.eth.Contract(
                stakingAbi,
                stakingContractAddress
            );
            // console.log("stakingContract", await stakingContract.methods)

            let data = await stakingContract.methods.userInfo(blockchain.account).call();
            let pendingRewards = await stakingContract.methods.pendingRewards(blockchain.account).call();
            let totalAmount = await stakingContract.methods.totalStakedAmount().call();
            let rewardDebt = data.rewardDebt;
            let totalStakedAmount = data.amount;
            data.pendingRewards = web3.utils.fromWei(pendingRewards.toString())
            rewardDebt = web3.utils.fromWei(rewardDebt)
            totalStakedAmount = web3.utils.fromWei(totalStakedAmount)
            totalAmount = web3.utils.fromWei(totalAmount)
            SetRewardDebts(rewardDebt.toString())
            SetpendingReward(data.pendingRewards.toString())
            SetTotalStakedAmounts(totalStakedAmount.toString())
            SetTotalAmounts(totalAmount.toString())
            setBalance(balance.toString())

        } catch (error) {
            console.log(error);
        }
    }

    const userCount = async () => {
        try {
            const web3 = blockchain.web3;
            const stakingContract = await new web3.eth.Contract(
                stakingAbi,
                stakingContractAddress
            );
            let numberOfStackers = await stakingContract.methods.userCount().call();
            // console.log("data>>>>>>", numberOfStackers)
            setNumberOfStacker(numberOfStackers)

        } catch (error) {
            console.log(error);
        }
    }

    const totalStakedAmount = async (amounts) => {
        const web3 = blockchain.web3;
        const stakingContract = await new web3.eth.Contract(
            stakingAbi,
            stakingContractAddress
        );

        console.log("contract ====> ", stakingContract.methods);
        let amount_to_send = amounts;
        // console.log("amount_to_send", amount_to_send);
        let contract = await stakingContract.methods.totalStakedAmount(amount_to_send).send({
            from: blockchain.account
        })
            .once("error", (err) => {
                // setLoading(false);
                console.log(err);
            })
            .then((receipt) => {
                // setLoading(false);
                console.log(receipt);
                // dispatch(fetchData(blockchain.account));
            });
    }

    useEffect(() => {
        rewardPerBlock();
        userInfo()
        userCount()


    }, [blockchain.account])


    return (
        <>
            <section className="page-header bg--cover w-100">
                <div className="container">
                    <div className="page-header__content text-center">
                        <h2 className="text-capitalize">Stacking</h2>
                        {/* <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Stacking</li>
                            </ol>
                        </nav> */}
                    </div>
                </div>
            </section>
            <div className="stacking padding-top padding-bottom w-100">
                <div className="container">
                    <div className="stacking__wrapper">
                        <div className="stacking__project">
                            <div className="row g-4">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="stacking__project-item">
                                        <div className="stacking__project-itemInner">
                                            <h3> {totalAmounts} SPX<span className="purecounter" data-purecounter-start="639499"
                                                data-purecounter-end="63939379"> </span> </h3>
                                            <p>Total Value Locked</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="stacking__project-item">
                                        <div className="stacking__project-itemInner">
                                            <h3><span className="purecounter" data-purecounter-start="0"
                                                data-purecounter-end="136.99">136</span>.99 %</h3>
                                            <p>Apy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="stacking__project-item">
                                        <div className="stacking__project-itemInner">
                                            <h3> {numberOfStacker}<span className="purecounter"
                                                data-purecounter-start="0"
                                                data-purecounter-end="69899">
                                               
                                            </span>
                                            </h3>
                                            <p>Number of Stakers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stacking__details">
                            <div className="stacking__title">
                                <h3>Participate IDO Stack</h3>
                            </div>

                            <div className="stacking__content">
                                <div className="row align-items-center g-5">
                                    <div className="col-lg-7">
                                        <div className="stacking__ammount">
                                            <p>Total Stacked Amount</p>
                                            <h4>{totalStakedAmounts} SPX  </h4>
                                        </div>
                                        <div className="stacking__period">
                                            {/* <ul className="stacking__period-list nav nav-pills" id="stackingPeriod" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="period-tab1" data-bs-toggle="tab"
                                                        data-bs-target="#period-tab1-pane" type="button" role="tab"
                                                        aria-controls="period-tab1-pane" aria-selected="true">7 Days</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="period-tab2" data-bs-toggle="tab"
                                                        data-bs-target="#period-tab2-pane" type="button" role="tab"
                                                        aria-controls="period-tab2-pane" aria-selected="false">14 Days</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="period-tab3" data-bs-toggle="tab"
                                                        data-bs-target="#period-tab3-pane" type="button" role="tab"
                                                        aria-controls="period-tab3-pane" aria-selected="false">30 Days</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="period-tab4" data-bs-toggle="tab"
                                                        data-bs-target="#period-tab4-pane" type="button" role="tab"
                                                        aria-controls="period-tab4-pane" aria-selected="false">60 Days</button>
                                                </li>
                                            </ul> */}
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="period-tab1-pane" role="tabpanel"
                                                    aria-labelledby="period-tab1" tabIndex="0">
                                                    <div className="stacking__info">
                                                        <div className="row align-items-center g-5">
                                                            <div className="col-sm-8">
                                                                <ul className="stacking__info-list">
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Reward Per Block: {rewardPerBlocks}
                                                                            {/* <span className="stacking__info-value">7 Days</span> */}
                                                                        </p>
                                                                    </li>
                                                                    {/* <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Re-locks on registration:
                                                                            <span className="stacking__info-value">Yes</span>
                                                                        </p>
                                                                    </li> */}
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Reward Dept: {rewardDebts}
                                                                            {/* <span className="stacking__info-value">Yes</span> */}
                                                                        </p>
                                                                    </li>
                                                                    {/* <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Early unstake fee:
                                                                            <span className="stacking__info-value">23%</span>
                                                                        </p>
                                                                    </li> */}
                                                                    {/* <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Status:
                                                                            <span className="stacking__info-value">Unlocked</span>
                                                                        </p>
                                                                    </li> */}
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Pending Reward: {pendingReward}
                                                                            {/* <span className="stacking__info-value">Unlocked</span> */}
                                                                        </p>
                                                                    </li>
                                                                </ul>

                                                            </div>
                                                            {/* <div className="col-sm-4">
                                                                <div className="stacking__apy">
                                                                    <p>APY Rate </p>
                                                                    <h3>10%</h3>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="tab-pane fade" id="period-tab2-pane" role="tabpanel"
                                                    aria-labelledby="period-tab2" tabIndex="0">
                                                    <div className="stacking__info">
                                                        <div className="row align-items-center g-5">
                                                            <div className="col-sm-8">
                                                                <ul className="stacking__info-list">
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Lock Period:
                                                                            <span className="stacking__info-value">14 Days</span>
                                                                        </p>
                                                                    </li>
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Re-locks on registration:
                                                                            <span className="stacking__info-value">Yes</span>
                                                                        </p>
                                                                    </li>
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Early unstake fee:
                                                                            <span className="stacking__info-value">23%</span>
                                                                        </p>
                                                                    </li>
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Status:
                                                                            <span className="stacking__info-value">Unlocked</span>
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="stacking__apy">
                                                                    <p>APY Rate </p>
                                                                    <h3>20%</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="period-tab3-pane" role="tabpanel"
                                                    aria-labelledby="period-tab3" tabIndex="0">
                                                    <div className="stacking__info">
                                                        <div className="row align-items-center g-5">
                                                            <div className="col-sm-8">
                                                                <ul className="stacking__info-list">
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Lock Period:
                                                                            <span className="stacking__info-value">30 Days</span>
                                                                        </p>
                                                                    </li>
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Re-locks on registration:
                                                                            <span className="stacking__info-value">Yes</span>
                                                                        </p>
                                                                    </li>
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Early unstake fee:
                                                                            <span className="stacking__info-value">23%</span>
                                                                        </p>
                                                                    </li>
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Status:
                                                                            <span className="stacking__info-value">Unlocked</span>
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="stacking__apy">
                                                                    <p>APY Rate </p>
                                                                    <h3>30%</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="period-tab4-pane" role="tabpanel"
                                                    aria-labelledby="period-tab4" tabIndex="0">
                                                    <div className="stacking__info">
                                                        <div className="row align-items-center g-5">
                                                            <div className="col-sm-8">
                                                                <ul className="stacking__info-list">
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Lock Period:
                                                                            <span className="stacking__info-value">60 Days</span>
                                                                        </p>
                                                                    </li>
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Re-locks on registration:
                                                                            <span className="stacking__info-value">Yes</span>
                                                                        </p>
                                                                    </li>
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Early unstake fee:
                                                                            <span className="stacking__info-value">23%</span>
                                                                        </p>
                                                                    </li>
                                                                    <li className="stacking__info-item">
                                                                        <p className="stacking__info-name">Status:
                                                                            <span className="stacking__info-value">Unlocked</span>
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <div className="stacking__apy">
                                                                    <p>APY Rate </p>
                                                                    <h3>45%</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>

                                        </div>

                                        <div className="stacking__approve-withdraw">

                                            <div className="input-group">
                                                <button className={`input-group-btn withdraw-btn claim-btn ${!loading1 && "active-loader"}`} onClick={(e) => {
                                                    e.preventDefault();
                                                    setLoading1(false)
                                                    claim(amount);
                                                }}>
                                                    {loading1 ? "Claim" : <div className='small-loader'><Loader /></div>}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-8">
                                        <div className="stacking__approve">
                                            <div className="stacking__approve-field mb-5">
                                                <label for="approve-stack" className="form-label">Balance: <span>{balance} SPX</span>
                                                </label>

                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        aria-label="Approve Stack"
                                                        id="approve-stack"
                                                        placeholder="0.00"
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            let val = BigNumber(e.target.value).absoluteValue().toFixed();
                                                            if (!isNaN(val)) {
                                                                setAmount(blockchain.web3.utils.toWei(val));
                                                            } else {
                                                                setAmount("0");
                                                            }
                                                            allowance(val)

                                                        }} />
                                                    <span className="input-group-text" >Max</span>
                                                    {allowances ? <button className="input-group-btn"
                                                        onClick={(e) => {
                                                            setLoading(false)
                                                            e.preventDefault();
                                                            approve(amount);
                                                        }}
                                                    >
                                                        {loading ? "Approve" : <div className='small-loader'><Loader /></div>}
                                                    </button>
                                                        :
                                                        <button className="input-group-btn withdraw-btn"
                                                            onClick={(e) => {
                                                                setLoading(false)
                                                                e.preventDefault();
                                                                deposit(amount);
                                                            }}
                                                        >Deposit
                                                        </button>
                                                    }


                                                </div>

                                            </div>
                                            <div className="stacking__approve-withdraw">
                                                <label for="withdraw-stack" className="form-label">Staked: <span>{totalStakedAmounts} SPX</span>
                                                </label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" aria-label="Withdraw Stack"
                                                        id="withdraw-stack" placeholder="0.00"
                                                        onChange={(e) => {
                                                            e.preventDefault();
                                                            let val = BigNumber(e.target.value).absoluteValue().toFixed();
                                                            if (!isNaN(val)) {
                                                                setAmount(blockchain.web3.utils.toWei(val));
                                                            } else {
                                                                setAmount("0");
                                                            }
                                                        }}
                                                    />
                                                    <span className="input-group-text">Max</span>

                                                    <button className="input-group-btn withdraw-btn" onClick={(e) => {
                                                        e.preventDefault();
                                                        let checkAmount = blockchain.web3.utils.fromWei(amount)
                                                        if (Number(checkAmount) == 0) {
                                                            console.log("checkAmount", checkAmount);
                                                            console.log("totalStakedAmounts", totalStakedAmounts);
                                                            alert("amount should not be blank")
                                                        } else if (Number(checkAmount) > Number(totalStakedAmounts)) {

                                                            alert("amount should not be greater then staked amount")


                                                        } else {
                                                            setLoading2(false)

                                                            withdraw(amount);
                                                        }


                                                    }}>

                                                        {loading2 ? "Withdraw" : <div className='small-loader'><Loader /></div>}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <p className="note-text"><strong>Note:</strong> Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Molestiae
                                    expedita
                                    error quod!
                                    Eaque, laudantium hic.</p> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div >
            {/* <section className="cta padding-bottom w-100">
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
            </section> */}
        </>
    )
}

export default Stacking