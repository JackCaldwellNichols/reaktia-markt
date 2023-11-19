import React from "react";
import logo from "../../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <img src={logo} />
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia libero
          distinctio ipsum eligendi, possimus, repellendus cum velit, harum
          veniam aut blanditiis temporibus. Eius, excepturi itaque fugiat unde
          molestiae in repellat.
        </p>
        <div className="socialMedia">
          <span color="blue" className="socialIcon">
            <FacebookOutlinedIcon />
          </span>

          <span color="violet" className="socialIcon">
            <InstagramIcon />
          </span>

          <span color="blue" className="socialIcon">
            <TwitterIcon />
          </span>
        </div>
      </div>
      <div className="center">
        <h3 className="title">USEFUL LINKS</h3>
        <ul className="list">
          <li className="listItem">Home</li>
          <li className="listItem">Cart</li>
          <li className="listItem">Men's Fashion</li>
          <li className="listItem">Women's Fashion</li>
          <li className="listItem">Accessories</li>
          <li className="listItem">My Account</li>
          <li className="listItem">Orders</li>
          <li className="listItem">Wishlist</li>
          <li className="listItem">Terms</li>
        </ul>
      </div>
      <div className="right">
        <h3 className="title">Contact</h3>
        <div className="contactItem">
          <LocationOnIcon />
          723 Palace Boulevard, San Diego, 845298
        </div>
        <div className="contactItem">
          <LocalPhoneIcon />
          +1 234 567 890
        </div>
        <div className="contactItem">
          <EmailIcon />
          contact@mernisgreat.net
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
