import React from "react";
import "./BannerSix.css";
import whatapp from "../../Assets/Roleximage/whatapp.png";
import UpperLogo from "../../Assets/Roleximage/upperlogo.png";
import comission from "../../Assets/Roleximage/commision.png";
import master from "../../Assets/Roleximage/masterLogo.png";
import partner from "../../Assets/Roleximage/partner.png";
import Referal from "../../Assets/Roleximage/refer.png";
import signUp from "../../Assets/Roleximage/signUpBonus.png";
import power from "../../Assets/Roleximage/powerPlay.png";
import sideLine from "../../Assets/Roleximage/sideLine.png";
import upLine from "../../Assets/Roleximage/upLine.png";

const BannerSix = () => {
  return (
    <div className="sixtMainDiv">
      <div className="sixFirstDiv">
        <div className="sixFirsInnerDiv">
          <p className="sixhowText">Why</p>
          <p className="sixWorksText">Love Us</p>
          <p className="descriptionTextONe">
            Exclusive partnership programs to make real <br></br>
            <span className="sixWhatappText">CASH</span>earnings
          </p>
        </div>
      </div>
      <div className="sixSecondDiv">
        <div className="sixSecondInner">
          <div className="sixSecondInnerOne">
            <div className="sixItemDiv">
              <div>
                <img src={master} />
              </div>
              <p className="howItWorkitemTextOne">Master agent program </p>
            </div>
            <div className="sixItemDiv">
              <div>
                <img src={comission} />
              </div>
              <p className="howItWorkitemTextOne">Commission agent program </p>
            </div>
            <div className="sixItemDiv">
              <div>
                <img src={partner} />
              </div>
              <p className="howItWorkitemTextOne">Partner weekly bonus </p>
            </div>
            <div className="sixItemDiv">
              <div>
                <img src={Referal} />
              </div>
              <p className="howItWorkitemTextOne">Referral Bonus</p>
            </div>
            <div className="sixItemDiv">
              <div>
                <img src={signUp} />
              </div>
              <p className="howItWorkitemTextOne">Sign up Bonus </p>
            </div>
            <div className="sixItemDiv">
              <div>
                <img src={power} />
              </div>
              <p className="howItWorkitemTextOne">Power plays</p>
            </div>
          </div>
        </div>
        <div className="sixKnowMoreDiv">
          <p className="howItWorkitemTextOne">
            To Know More <br></br>
            WhatsApp Us
          </p>
          <div className="knowMoreWhatpp">
            <img src={whatapp} />
          </div>
        </div>
        <div className="sixLogoDiv">
          <img src={UpperLogo} />
        </div>
        <div className="sideLineDiv">
          <img src={sideLine} />
        </div>
        <div className="upLineDiv">
          <img src={upLine} />
        </div>
      </div>
    </div>
  );
};

export default BannerSix;
