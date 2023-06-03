import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Bengaluru, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              9611476680
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              abhijithsuresh2023@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About company</h4>
          <p>
          Our web development company is a team of highly skilled professionals dedicated to delivering exceptional websites and digital solutions. We combine cutting-edge technologies, creative design, and strategic thinking to help businesses thrive online. With a client-centric approach, we strive to exceed expectations and provide unparalleled results for our clients' web development needs.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
