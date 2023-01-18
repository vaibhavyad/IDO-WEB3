import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navbar";
import { usePoolContext } from "./context/poolContext";
import Account from "./pages/account";
import Home from "./pages/home.js";
import Launchpad from "./pages/launchpad.js";
import LaunchpadInfo from "./pages/launchpadInfo";
import Locker from "./pages/locker";
import LockerInfo from "./pages/lockerInfo";
import LockToken from "./pages/lockToken";
import Publish from "./pages/publish";
import { fetchContract } from "./redux/contract/contractAction";
import { checkConnection } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/global";
import Project from "./pages/Project";
import KycPage from "./pages/KycPage";
import ProjectDetail from "./pages/ProjectDetails";
import ApplyProject from "./pages/ApplyProject";
import Tokenomics from "./pages/Tokenomics";
import Stacking from "./pages/Stacking";
import Faq from "./pages/Faq";
import LeaderBoard from "./pages/LeaderBoard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Project2 from "./pages/Project2";
import './styles/style.css'
import ViewAllCompletedData from "./pages/ViewAllCompletedData";
import ViewAllUpcomingData from "./pages/ViewAllUpcomingData";
import StartedData from "./components/StartedData";
import ViewAllStartedData from "./pages/ViewAllStartedData";
function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const contract = useSelector((state) => state.contract);
  const allPools = usePoolContext().allPools;

  const isLockerEnabled = process.env.REACT_APP_ENABLE_LOCKER === 'true';

  useEffect(() => {
    if (blockchain.account !== null) {
      dispatch(fetchData(blockchain.account));
    }
    fetchContract();
  }, [dispatch, blockchain.account]);

  useEffect(() => {
    dispatch(fetchContract());
    checkConnection(dispatch)
  }, []);

  return (
    <s.Screen>
      <Navigation />
      {/* <s.Container ai="center">
        <div
          style={{
            border: "1px solid var(--secondary)",
            marginBottom: 30,
            width: "92%",
          }}
        />
      </s.Container> */}
      <s.Container ai="center" className="token-wrapper-box">
        <s.Container>
          <s.Container ai="center" >
            <s.TextID>
              {blockchain.errorMsg !== "" ? blockchain.errorMsg : null}
            </s.TextID>
          </s.Container>
          <Outlet />
          <Routes>
            <Route
              path="/"
              element={<Home blockchain={blockchain} data={data} />}
            />
            <Route path="/project" element={<Project />} />
            <Route path="/kyc" element={<KycPage />} />
            <Route path="/project-detail/:idoAddress" element={<ProjectDetail />} />
            <Route path="/apply-project" element={<ApplyProject />} />
            <Route path="/stacking" element={<Stacking />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/leader-board" element={<LeaderBoard />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-pass" element={<ResetPassword />} />
            <Route path="/project-2" element={<Project2 />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="/launchpad/:idoAddress" element={<LaunchpadInfo />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/lock" element={<LockToken />} />
            <Route path="/account" element={<Account />} />
            <Route path="/completed-project" element={<ViewAllCompletedData/>}/>
            <Route path="/upcoming-project" element={<ViewAllUpcomingData/>}/>
            <Route path="/started-project" element={<ViewAllStartedData/>}/>
              {/* {isLockerEnabled && <Route path="/" element={<Locker />} />}
            {isLockerEnabled && <Route path="/" element={<LockerInfo />} />} */}
           {isLockerEnabled && <Route path="/locker" element={<Locker />} />}
            {isLockerEnabled && <Route path="/locker/:lockerAddress" element={<LockerInfo />} />} 
          </Routes>
          {/* <s.SpacerLarge /> */}
          {/* <s.SpacerLarge /> */}
          {/* <s.SpacerLarge /> */}
        </s.Container>
        <Footer />
      </s.Container>
    </s.Screen>
  );
}

export default App;
