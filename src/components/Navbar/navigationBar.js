import React from "react";
import "./navBar.css";
import UpperLogo from "../../Assets/Roleximage/upperlogo.png";
import betText from "../../Assets/Roleximage/bettext.png";
import dice from "../../Assets/Roleximage/dice.png";
import Line from "../../Assets/Roleximage/line.png";
import { useNavigate } from 'react-router-dom';


const NavigationBar = () => {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate('/')
  }
  return (
    <div className="navContainer">
      <div className="navSubContainer">
        <div className="navSubDiv">
          <div  className="navDiv" onClick={handleBack}>
            <a href="#aboutUs" className="navLink">
              <p className="navItemsOne">ABOUT US</p>
            </a>
          </div>
        </div>
        <div className="navSubDiv">
          <div  className="navDiv" onClick={handleBack}>
            <a href="#ourPartners" className="navLink">
              <p className="navItemsOne">OUR PARTNERS</p>
            </a>
          </div>
        </div>
        <div className="navSubDiv">
          <div  className="navDiv" onClick={handleBack}>
            <a href="#howitworks" className="navLink">
              <p className="navItemsOne">HOW IT WORKS</p>
            </a>
          </div>
        </div>
        <div className="navSubDiv">
          <div className="logoContainer">
            <img src={UpperLogo} />
          </div>
          <div className="logoContainerONe">
            <div>
              <img src={Line} />
            </div>
            <div className="ballOne"></div>
          </div>
          <div className="logoContainer">
            <img src={betText} />
            <img src={dice} />
          </div>
        </div>
        <div className="navSubDiv">
          <div  className="navDiv" onClick={handleBack}>
            <a href="#whyLoveUs" className="navLink">
              <p className="navItemsOne">WHY LOVE US</p>
            </a>
          </div>
        </div>
        <div className="navSubDiv">
          <div  className="navDiv" onClick={handleBack}>
            <a href="#whyRolexBook" className="navLink">
              <p className="navItemsOne">WHY ROLEXBOOK</p>
            </a>
          </div>
        </div>
        <div className="navSubDiv">
          <div  className="navDiv" onClick={handleBack}>
            <a href="#contactUs" className="navLink">
              <p className="navItemsOne">CONTACT US</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
