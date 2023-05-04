import React from "react";
import "./BannerThree.css";
import cricketMan from "../../Assets/Roleximage/cricketMan.png";
import sidemainCard from "../../Assets/Roleximage/threeBannerCard.png";

const BannerThree = () => {
  return (
    <div className="thirdMainCantainer">
      <div className="d-flex align-items-center " style={{width:'100%'}}>
        <div className="gifContainer">
          <img src={cricketMan} />
        </div>
        <div className="textContainer">
          <div className="innerTextContent">
            <p className="welcomeContent">
              We are <span className="rolexText">RolexBook</span>
            </p>
            {/* <p className="secondTitle">
            THE BIGGEST PLATFORM<br></br>FOR PROVIDING ONLINE<br></br>SPORTS
            BETTING ID'S
          </p> */}
            <p className="secondTitle">
              THE BIGGEST PLATFORM FOR PROVIDING ONLINE SPORTS NEWS
            </p>
            <p className="welcomeContent">
              Welcome to RolexBook, We are India’s No 1 Exchange and the First
              That Provide 24*7 Withdrawal Facility. We offer you a genuinely
              unique sports betting experience. Besides, We also offer global
              liquidity, best industry pricing with a single click.
            </p>
            <div className="phoneNumberConatinerOne">
              <p className="phoneNumOne">Whatapp us on
                {/* +91 9876543210 */}
                +971553772099
              </p>
            </div>
            <div className="demoContainerOne">
              <p className="getIdtext">Get your Demo ID Now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="thirdMainImgCantainer">
        <img src={sidemainCard} className="mainSideCard" />
      </div>
    </div>
  );
};

export default BannerThree;
