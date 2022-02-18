import React from "react";
import "./offer.css";
import oner from "../../assets/assests/oner.png"
import two from "../../assets/assests/two.png"
import three from "../../assets/assests/three.png"

const Offer = () => {
  return (
    <div className="offercontainer">
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src={oner}
            alt=""
          />
          <p className="box-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            dolorum.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src="https://vdepict.com/wp-content/uploads/2020/04/app-developer-icon-small-07.png"
            alt=""
          />
          <p className="box-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            dolorum.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src={two}
            alt=""
          />
          <p className="box-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            dolorum.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src={three}
            alt=""
          />
          <p className="box-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            dolorum.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src="https://vdepict.com/wp-content/uploads/2020/04/app-developer-icon-small-05.png"
            alt=""
          />
          <p className="box-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            dolorum.
          </p>
        </div>
      </div>
      <div className="offerbox">
        <div className="offercontent">
          <img
            className="box-img"
            src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-email-and-mail-icon-vector-png-image_5082677.jpg"
            alt=""
          />
          <p className="box-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            dolorum.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Offer;
