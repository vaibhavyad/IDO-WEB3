// constants
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import Web3Modal from "web3modal";
import FeeToken from "../../contracts/FeeToken.json";
import IDOFactory from "../../contracts/IDOFactory.json";
import LockerFactory from "../../contracts/TokenLockerFactory.json";
// log
import { fetchData } from "../data/dataActions";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "2b03b3e74b7246d9adc344197e3f0da6",
    },
  },
};

const web3Modal = new Web3Modal({
  network: process.env.REACT_APP_modalNetwork, // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const provider = await web3Modal.connect();

    let web3 = new Web3(provider);
    const networkId = process.env.REACT_APP_networkID;
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.getChainId();

    const FeeTokenNetworkData = await FeeToken.networks[networkId];
    const IDOFactoryNetworkData = await IDOFactory.networks[networkId];
    const LockerFactoryNetworkData = await LockerFactory.networks[networkId];
   
    if (
      IDOFactoryNetworkData &&
      FeeTokenNetworkData &&
      LockerFactoryNetworkData &&
      networkId == chainId
    ) {
      const IDOFactoryContract = new web3.eth.Contract(
        IDOFactory.abi,
        IDOFactoryNetworkData.address
      );
      const FeeTokenContract = new web3.eth.Contract(
        FeeToken.abi,
        FeeTokenNetworkData.address
      );

      const LockerFactoryContract = new web3.eth.Contract(
        LockerFactory.abi,
        LockerFactoryNetworkData.address
      );
      dispatch(
        connectSuccess({
          account: accounts[0],
          IDOFactory: IDOFactoryContract,
          FeeToken: FeeTokenContract,
          LockerFactory: LockerFactoryContract,
          web3,
        })
      );
      // Add listeners start
      provider.on("accountsChanged", (accounts) => {
        dispatch(updateAccount(accounts[0]));
      });
      provider.on("chainChanged", () => {
        clearCache();
      });
      // Add listeners end
    } else {
      web3Modal.clearCachedProvider();
      dispatch(
        connectFailed("Change network to " + process.env.REACT_APP_modalNetwork)
      );
    }
  };
};

export const clearCache = () => {
  web3Modal.clearCachedProvider();
  window.location.reload();
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};

export const checkConnection = (dispatch) => {
  if (web3Modal.cachedProvider) {
    dispatch(connect())
  }
}
