import React from "react";
import Th from "./tpoly-buliding.jpeg";
import "./App.css";
import Bf from "./bf.png";
import Footer from "./footer";
import App from "./Form";
import { Container } from "react-bootstrap";
import Heaer from "./header";
import Fiesta from "./Fiesta.mp4";
//import Image from 'react-image-resizer'

function event() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        background: (0, 0, 0, 0.5),
      }}
    >
      <div
        style={{
          backgroundImage: `url(${Th})`,
          width: "100%",
          height: "500px",
        }}
      >
        <h1
          className="fs-1"
          style={{ textAlign: "center", fontFamily: "Airal", fontsize: 10000 }}
        >
          Welcome{" "}
        </h1>
        <h1
          className="fs-1"
          style={{ textAlign: "center", fontFamily: "Airal", fontsize: 10000 }}
        >
          TO{" "}
        </h1>
        <video width="100%" height="300" controls>
          <source src={Fiesta} type="video/mp4" />
        </video>
      </div>

      <div className="text-center"></div>

      <div style={{ margin: 20 }}>
        <h3
          style={{
            display: "flex",
            textAlign: "center",
            alignitems: "center",
            justifyContent: "center",
          }}
        >
          About
        </h3>
        <a>
          Fiesta is a dynamic celebration uniting business, talent, and
          innovation. Featuring a Business Fair, Mr./Master Fiesta competition,
          Mock Interviews, Shark Tank for entrepreneurs, an exciting Auction,
          and insightful seminars, Fiesta offers a vibrant mosaic of
          opportunities for a memorable experience in talent, innovation, and
          enterprise.
        </a>
      </div>
    </div>
  );
}
export default event;
