import React from "react";
import "./social.css";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Contactsocial = () => {
  return (
    <div className="social">
      <div className="socialright">
        <span className="tti">Follow us!</span>
        <p className="ttpar">
          LOOKING TO KEEP UP WITH THE LATEST?
          <br /> YOU CAN FIND US HERE:
        </p>

        {/* <li className="hli">
            <a className="ali" href="www.twitter.com" target="_blank" rel="noopenner noreferrer">
              <FaTwitter />
            </a> */}
        <div className="hul">
          <a
            className="ali"
            href="www.twitter.com"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="ali"
            href="https://github.com " target="_blank" rel="noopenner noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="ali"
            href="https://facebook.com"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FaFacebook style = {{border:""}} />
          </a>
          <a
            className="ali"
            href="www.twitter.com"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="socialleft">
        <p className="ant">
          If you have any other questions, looking to submit an job application,
          or simply want to say hello, you can email us below.
        </p>
        <span className="mse">sponzer@gmail.com</span>
      </div>
    </div>
  );
};

export default Contactsocial;
