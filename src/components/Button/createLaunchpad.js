import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CreateLaunchpad = (props) => {
  const blockchain = useSelector((state) => state.blockchain);

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "center",
      }}
    >
      {blockchain.web3 ? (
        <NavLink className="idol-btn"
          to="/apply-project"
          // style={{
          //   whiteSpace: "nowrap",
          //   backgroundColor: "#28DBD1",
          //   padding: 10,
          //   borderRadius: 5,
          //   fontWeight: 700,
          //   paddingLeft: 18,
          //   paddingRight: 18,
          //   border:"#28dbd1",
          //   textDecoration: "none",
          //   color:"#02121D",
          // }}
        >
          Create IDO Poll
        </NavLink>
        
      ) : null}
    </div>
  );
};

export default CreateLaunchpad;
