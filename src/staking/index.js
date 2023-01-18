// log
import Web3 from "web3";

import stakingAbi from "../contracts/stakingAbi.json";

   export const fetchContract = async() => {
    try {
        console.log("222222222222222222222222222222222222");
    let web3 = new Web3('wss://goerli.infura.io/ws/v3/9a0b9c112a084682a4be93417eb71c8d');
   
    const stakingContractAddress = process.env.REACT_APP_STAKING_CONTRACT;
     
      const stakingContract = new web3.eth.Contract(
        stakingAbi,
        stakingContractAddress
      );
      console.log("11111111111111111111111111111111111111",{
         
          stakingContract: stakingContract,
          web3,
        });
      return(
        {
         
          stakingContract: stakingContract,
          web3,
        }
      );
    } catch (err) {
      console.log(err);
     
    }
  };


  export default fetchContract;

  
 
