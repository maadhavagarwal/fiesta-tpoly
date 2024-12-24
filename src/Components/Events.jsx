import React from "react";

import "../CSS/Events.css"

import iicLogo from "../Images/iicLogo.png"
import { useNavigate } from "react-router-dom";

export default function Events() {

  const Navigate=useNavigate();

  var events=[
    {
      "eventName":"businessfair",
      "poster":iicLogo,
    },
    {
      "eventName":"sparkstudio",
      "poster":iicLogo,
    },
    {
      "eventName":"smartgardenworkshop",
      "poster":iicLogo,
    },
    {
      "eventName":"eco-quiz",
      "poster":iicLogo,
    },
    {
      "eventName":"seminar1",
      "poster":iicLogo,
    },
    {
      "eventName":"seminar2",
      "poster":iicLogo,
    },
    {
      "eventName":"seminar3",
      "poster":iicLogo,
    },
    {
      "eventName":"seminar4",
      "poster":iicLogo,
    },
  ]

  return (
    <div className="container">
      <div className="d-flex justify-content-center flex-wrap">

        {events.map((value,index)=>(
          <div className="card mt-5 shadow p-3 mb-5 bg-white rounded mx-3 cardstyle" style={{width: "18rem"}} onClick={()=>Navigate(`/eventdetails/${value.eventName}`)}>
            <img src={iicLogo} className="card-img-top" alt="Loading......."/>
            {/* <hr/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div> */}
          </div>
        ))
        }

      </div>
    </div>
  );
}
