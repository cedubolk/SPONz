import React from "react";
import "./home.css";
import { VscSettingsGear } from "react-icons/vsc";
import { GiChart } from "react-icons/gi";
import { IoMagnetSharp } from "react-icons/io5";
import { MdReportProblem } from "react-icons/md";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homer">
          <h1>
         We grow brands,create experience and solve business problems.
          </h1>
          <div className="headeropt">
          <button className="header-btn">Join Us</button>
          </div>
          <ul className="hul">
            <div className="changer">
              <li>
                <VscSettingsGear style={{ color: "palegoldenrod",margin:"0px 20px"  }} />
                <div className="title">
                Business Planing<br/>joinus now
                </div>
              </li>
            </div>
            <div className="changer">
              <li>
                <GiChart style={{ color: "palegoldenrod",margin:"0px 20px" }} />
                <div className="title">
                   Business Analysis<br/>joinus now
                </div>
              </li>
            </div>
            <div className="changer">
              <li>
                <IoMagnetSharp style={{ color: "palegoldenrod",margin:"0px 20px" }} />
                <div className="title">
                 Brand Developing<br/>joinus now
                </div>
              </li>
            </div>
            <div className="changer">
              <li>
                <MdReportProblem style={{ color: "palegoldenrod",margin:"0px 20px" }} />
                <div className="title">
                    Problem Solving<br/>joinus now
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;


