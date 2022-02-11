import React from "react";
import "./details.css";

const Details = () => {
  return (
    <div className="details">
        <hr  style={{color:"black"}}/>
      <div className="detailsheader">Our Formula</div>
      <hr />
      <div className="detailspar">
        A successful brand is the combination of different elements. As a design
        house, we use a multi-disciplined approach to build trust and
        understanding between you and your customers.


      </div>
      <hr className="hrt"/>
    <div className="circlemain">
    <div className="circle"><span className="circleheaders">STRATEGY</span></div>
    <div className="circle"><span className="circleheaders">BRAND</span></div>
    <div className="circle"><span className="circleheaders">PACKAGING</span></div>
    <div className="circle"><span className="circleheaders">MARKETING</span></div>
    <div className="circle"><span className="circleheaders">INTERACTIVE</span></div>
    <div className="circle"><span className="circleheaders">SOCIAL MEDIA</span></div>
    <div className="circle"><span className="circleheaders">ART</span></div>
    <div className="circle"><span className="circleheaders">PROBLEM SOLVING</span></div>
     
    </div>
    
      
    </div>
  );
};

export default Details;
