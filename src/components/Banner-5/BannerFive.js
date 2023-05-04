import React from "react";
import "./BannerFive.css";
import redSpot from "../../Assets/Roleximage/redSpot.png";
import One from "../../Assets/Roleximage/one.png";
import two from "../../Assets/Roleximage/two.png";
import three from "../../Assets/Roleximage/three.png";
import four from "../../Assets/Roleximage/four.png";

const BannerFive = () => {
  return (
    <div className="fivthMainBanner">
      <p className="howText">
        How<span className="worksText">It Works</span>
      </p>
      <div className="HowItWorksStepConatiner">
        <div className="howItworksSubDiv">
          <div className="howItworksInnerDiv">
            <div className="d-flex align-items-center justify-content-center flex-column">
            <p className="howItWorkitemText">Step</p>
            <div className="numberConatiner">
              <img src={One} />
            </div>
            </div>
          
            <p className="howItWorkitemTextTwo">
              Message us on our WhatsApp number
            </p>
          </div>
        </div>
        <div className="howItworksSubDiv">
          <div className="howItworksInnerDiv">
            <p className="howItWorkitemText">Step</p>
            <div className="numberConatiner">
              <img src={two} />
            </div>
            <p className="howItWorkitemTextTwo">
              Customer Satisfy guaranteed with all information
            </p>
          </div>
        </div>
        <div className="howItworksSubDiv">
          <div className="howItworksInnerDiv">
            <p className="howItWorkitemText">Step</p>
            <div className="numberConatiner">
              <img src={three} />
            </div>
            <p className="howItWorkitemTextTwo">
              {/* Start depositing & withdrawal instantly */}
              START LEARNING TO DEPOSIT AND WITHDRAW INSTANTLY
            </p>
          </div>
        </div>
        <div className="howItworksSubDiv">
          <div className="howItworksInnerDiv">
            <p className="howItWorkitemText">Step</p>
            <div className="numberConatiner">
              <img src={four} />
            </div>
            <p className="howItWorkitemTextTwo">Earn from your skills</p>
          </div>
        </div>
      </div>
      <div className="redSpotContentDiv">
        {/* <p className="descriptionText">
          Our<span className="rolexText">RolexBook</span>is The Biggest Platform
          For Providing Online Sports Betting ID's.
        </p> */}
        <p className="descriptionText">OUR <span className="rolexText">RolexBook</span> IS THE BIGGEST PLATFORM FOR PROVIDING <br></br>ONLINE SPORTS INFORMATION</p>
        <p className="howItWorkitemTextOne">
          {/* Get Your Betting Id Now. Contact Us On WhatsApp. */}
          GET ALL INFORMATION NOW
        </p>
        <p className="enquiryText">
          For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here To
          Help You 24/7 With Our Online Services.
        </p>
        <p className="redWhatappText">
          Whatsapp<span className="descriptionTextONe"> us on</span>
        </p>
        <div className="howItWorkWhatppMain">
          <div className="howItWorkWhatpp">
            <div className="phoneNumberConatiner">
              <p className="phoneNumOne">
                {/* +91 9876543210 */}
                +971553772099
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
      </div>

      <div className="redSpotConatinerOne">
        <img src={redSpot} className="redImg" />
      </div>
      <div className="redSpotConatinerTwo">
        <img src={redSpot} className="redImg" />
      </div>
      <div className="redSpotConatinerThree">
        <img src={redSpot} className="redImg" />
      </div>
      <div className="redSpotConatinerFour">
        <img src={redSpot} className="redImg" />
      </div>
      <div className="redSpotConatinerFive">
        <img src={redSpot} className="redImg" />
      </div>
      <div className="redSpotConatinerSix">
        <img src={redSpot} className="redImg" />
      </div>
      <div className="redSpotConatinerSeven">
        <img src={redSpot} className="redImg" />
      </div>
    </div>
  );
};

export default BannerFive;
