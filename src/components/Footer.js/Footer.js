import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import mainLogo from "../../Assets/Roleximage/mainLogo.png";
import UpperLogo from "../../Assets/Roleximage/upperlogo.png";
import betText from "../../Assets/Roleximage/bettext.png";
import dice from "../../Assets/Roleximage/dice.png";
import Line from "../../Assets/Roleximage/line.png";
import socialIcon from "../../Assets/Roleximage/socialIcon.png";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate('/')
  }
  const handleUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  return (
    <>
      <div className="eightMainDiv">
        <div className="eightLogoContainer">
          <div>
            <div className="logoContainer">
              <img src={UpperLogo} />
            </div>
            <div className="logoContainer">
              <img src={Line} />
            </div>
            <div className="logoContainer">
              <img src={betText} />
              <img src={dice} />
            </div>
          </div>
          <div className="eightMainLogo">
            <img src={mainLogo} />
          </div>
        </div>
        <div className="eightTittleDiv">
          <div className="eightinnerGitInTouchDiv">
            <p className="eightGetInText">Get In Touch With <span className="eightrolexText">RolexBook</span>  Customer Care</p>
            <p className="enquiryText">
              For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here
              To Help
            </p>
            <p className="enquiryText">You 24/7 With Our Online Services.</p>
          </div>
          <div className="socialImg">
            <img src={socialIcon} />
          </div>
        </div>
        <div className="eightWhatappDiv">
          <p className="redWhatappText">
            Whatsapp <span className="descriptionTextONe">us on</span>
          </p>
          <div className="eightNumberDiv">
            <div className="phoneNumberConatiner">
              <p className="phoneNumOne">
                +971553772099
                {/* +91 9876543210 */}
              </p>
            </div>
            <div className="phoneNumberConatiner">
              <p className="phoneNumOne">
                {/* +91 9876543210 */}
                +971553772099
              </p>
            </div>
          </div>

        </div>
        <p className="eightGetInText">With Our Step-By-Step Guide For Beginners</p>
        <p className="enquiryText">We Provide 24/7 Service For Our Customers.</p>
        <p className="enquiryText">Phone No:<span className="enquiryText" style={{ marginLeft: "2%" }}>+971-50-4398831</span></p>
        <p className="enquiryText">Websites:<a className="enquiryText" href="https://glitzitech.com" style={{ marginLeft: "2%" }}>www.Glitzitech.com</a></p>
        <p className="enquiryText">Email-Id:<a className="enquiryText" style={{ marginLeft: "2%" }}>recruitment@glitzitech.com</a></p>
        <div className="addressText">
          <p className="enquiryText">Address:</p>
          <p className="enquiryText">Bank street building-AI Twahidi<br></br>building next to ADCB DUBAI <br></br>Postcode ; 2203</p>
        </div>

        {/* <div className="getStartedDiv">
        <div className="phoneNumberConatiner">
          <p className="phoneNumOne">GET STARTED PLAYING </p>
        </div>
        <div className="phoneNumberConatiner">
          <p className="phoneNumOne">GET ONLINE ID</p>
        </div>
      </div> */}

      </div>
      <div className="FooterDiv">
        <div className="eightFooterDiv">
          <a onClick={handleBack} href="#">
            <p className="footerItem">Home</p>
          </a>
          <a onClick={handleBack} href="#aboutUs" >
            <p className="footerItem">About Us</p>
          </a>
          <a onClick={handleBack} href="#ourPartners" >
            <p className="footerItem">Our Partner</p>
          </a>
          <a onClick={handleBack} href="#howitworks" >
            <p className="footerItem">How It Works</p>
          </a>
          <a onClick={handleBack} href="#whyLoveUs" >
            <p className="footerItem">Why Love Us</p>
          </a>
          <a onClick={handleBack} href="#whyRolexBook" >
            <p className="footerItem">Why RolexBook</p>
          </a>
          <a onClick={handleBack} href="#contactUs" >
            <p className="footerItem">Contact Us</p>
          </a>
          <Link to={"/privacy-policy"} onClick={handleUp} >
            <p className="footerItem">Privacy Policy</p>
          </Link>
          <Link to={"/term-condition"} onClick={handleUp} >
            <p className="footerItem">Terms & Conditions</p>
          </Link>
        </div>
        <div className="eightCompanyUrl">
          <a href="https://glitzitech.com">
            <p className="enquiryText">
              @Copyright reserved by glitzitech. A unit of Glitzitech
            </p>
          </a>
        </div>
      </div>
    </>

  );
};

export default Footer;
