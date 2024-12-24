import React, { useState } from "react";
import "../CSS/Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import iiclogo from "../Images/IIC logo.png";
import AICTClogo from "../Images/AICTC logo.png";
// import Innovationlogo from "../Images/innovation cell logo.png";
import TpolyLogo from "../Images/Tpoly logo.png";
import fiestaLogo from "../Images/fiestaLogo.png";

function Navbar() {

    const Navigate=useNavigate()

  return (
    <div style={{backgroundColor:"black"}}>
      <div
        className="d-flex justify-content-center images pt-2"
        style={{ flexWrap: "wrap" }}
      >
        <img
          className="img1"
          src={iiclogo}
          alt="Logo"
          style={{ width: "80px",height:"80px" }}
        />
        <img
          className="img2"
          src={AICTClogo}
          alt="Logo"
          style={{ width: "80px",height:"80px" }}
        />
        <img
          className="img3"
          src={TpolyLogo}
          alt="Logo"
          style={{ width: "90px",height:"90px" }}
        />
        <img
          className="img4"
          src={fiestaLogo}
          alt="Logo"
          style={{ width: "80px",height:"80px" }}
        />
      </div>
      <hr/>
      <div className="d-flex justify-content-center mt-3" style={{background:"black"}}>
        <button className="mx-4 mt-2 px-5 py-1 navbtn" style={window.location.pathname==="/"?{borderBottom:"2px solid white",backgroundColor:"white",color:"black",scale:"1.20",fontSize:"18px"}:null} onClick={()=>Navigate("/")}> <strong>Home</strong></button>
        <button className="mx-4 mt-2 px-5 py-1 navbtn" style={window.location.pathname!=="/"?{borderBottom:"2px solid white",backgroundColor:"white",color:"black",scale:"1.20",fontSize:"18px"}:null} onClick={()=>Navigate("/events")}><strong>Events</strong></button>
      </div>
    </div>
  );
}

export default Navbar;
