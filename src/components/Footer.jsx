import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.jpg";
import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import linkedin from "../assets/images/linkedin.png";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

//pages
import Privacypolicy from "../pages/misc/Privacypolicy";
import Support from "../pages/misc/Support";
import Terms from "../pages/misc/Terms&conditions";
import Faqs from "../pages/misc/Faqs";
import Fbpage from "../pages/misc/Fbpage";
import instapage from "../pages/misc/instapage";
import linkedinpage from "../pages/misc/linkedinpage";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");

  const goToHome = () => {
    navigate("/");
  };

  const goToFaq = () => {
    navigate("/Faq");
  };

  const goToTerms = () => {
    navigate("/Terms");
  };

  const goToSupport = () => {
    navigate("/Support");
  };

  const goToPrivacy = () => {
    navigate("/Privacypolicy");
  };

  const goToLinkedin = () => {
    navigate("/Linkedinpage");
  };

  const goToFb = () => {
    navigate("/fbpage");
  };

  const goToinsta = () => {
    navigate("/Instapage");
  };

  return (
    <>
      <div className="footer">
        <br />
        <br />
        <br />
        <div className="footerlogo" onClick={goToHome}>
          <img src={Logo} alt="" />
        </div>
        <br />
        <br />
        <div className="inner-footer">
          <hr />
          <ul>
            <li className="infoli" onClick={goToFaq}>
              FAQS
            </li>
            <li className="infoli" onClick={goToTerms}>
              TERMS & CONDITIONS
            </li>
            <li className="infoli" onClick={goToSupport}>
              SUPPORT
            </li>
            <li className="infoli" onClick={goToPrivacy}>
              PRIVACY POLICY
            </li>
          </ul>
          <hr />
          <div className="followus">FOLLOW US</div>
          <div className="socialmedia">
            <ul>
              <li className="socli">
                <img src={fb} />
              </li>
              <li className="socli">
                <img src={insta} />
              </li>
              <li className="socli">
                <img src={linkedin} />
              </li>
            </ul>
          </div>
          <div className="companyname">CRYPTOTUNES@2022</div>
        </div>
      </div>
    </>
  );
};
export default Footer;
