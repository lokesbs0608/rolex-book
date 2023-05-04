import React from "react";
import "./bannerOne.css";
import mainLogo from "../../Assets/Roleximage/mainLogo.png";
import sideShadow from "../../Assets/Roleximage/sideShadow.png";
import sideCard from "../../Assets/Roleximage/sideCard.png";
import mainCard from "../../Assets/Roleximage/mainCard.png";
import whatapp from "../../Assets/Roleximage/whatapp.png";
import telegram from "../../Assets/Roleximage/telegram.png";
import shuttle from "../../Assets/Roleximage/shuttle.png";
import football from "../../Assets/Roleximage/football.png";
import cricket from "../../Assets/Roleximage/cricket.png";
const BannerOne = () => {
  return (
    <>
      {/* <div className="bannerOneContainer">
        <div className="imgContainer">
          <div>
            <img src={sideShadow} className="sideShadowImg" alt="silderImage" />
          </div>
          <div>
            <img src={mainLogo} alt="main_logo" />
          </div>
        </div>
        <div className="titleContainer">
          <p className="navItems">#1 WORLD'S TOP-MOST EXCHANGE</p>
        </div>
        <div className="exchangeBanner">
          <p className="subTitle">GET YOUR ONLINE ID WITH THE BIGGEST</p>
          <p className="subTitleOne">EXCHANGE</p>
          <p className="subTitle">NO.1 PLATFORM FOR PROVIDING</p>
          <p className="subTitle">ONLINE SPORTS & CASINO ID</p>
        </div>
        <div className="exchangeText">
          <p className="subTitleTwo">EXCHANGE</p>
        </div>
        <div className="demoContainer">
          <div className="demoDiv">

        
            <p className="subTitleThree">GET INFORMATION ON GAMES NOW</p>
          
          </div>
        </div>
        <div className="block">
        <div className="bottomCardContainer">
          <img src={sideCard} alt="sidecard" />
        </div>
        <div className="ContainerOne">
          <img src={mainCard} alt="mainCard" />
        </div>
        <div className="Containertwo">
          <img src={shuttle} alt="shutle" />
        </div>
        <div className="Containerthree">
          <img src={football} alt="footbal" />
        </div>
        <div className="Containerfour">
          <img src={cricket} alt="cricket" />
        </div>
        </div>
    
      </div>/
     */}
      <div
        style={{ minHeight: "50rem", position: "relative" }}
        className="px-4"
      >
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div style={{ marginLeft: "5rem" }}>
            <div className="titleContainer">
              <p className="navItems">#1 WORLD'S TOP-MOST EXCHANGE</p>
            </div>
          </div>
          <div>
            <img src={mainLogo} alt="main_logo" />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div style={{ marginLeft: "5rem" }}>
            <div
              style={{ fontWeight: "600", fontSize: "1.5rem" }}
              className="text-white "
            >
              GET YOUR ONLINE ID WITH BIGGEST
            </div>
            <span
              style={{
                fontSize: "5rem",
                color: "white",
                fontWeight: "600",
                textShadow: '0 0 10px red, 0 0 20px red, 0 0 30px #fff, 0 0 40px red'
              }}
            >
              EXCHANGE
            </span>
            <div
              style={{ fontWeight: "600", fontSize: "1.5rem", width: "28rem" }}
              className="text-white "
            >
              NO.1 PLATFORM FOR PROVIDING ONLINE SPORTS & CASINO ID
            </div>
            <div
              style={{
                border: "3px solid #fff",
                boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)",
                borderRadius: "10px",
                color: "#fff",
                textAlign: "center",
                padding: "10px 20px",
                marginTop: "1rem",
                fontSize: "2rem",
                fontWeight: "600",
                cursor: "pointer",
             
              }}
            >
              <span>Get your Demo ID Now</span>
            </div>
          </div>

          <div style={{ width: "60%" }}>
            <div className="block">
              <div className="bottomCardContainer">
                <img src={sideCard} alt="sidecard" />
              </div>
              <div className="ContainerOne">
                <img src={mainCard} alt="mainCard" />
              </div>
              <div className="Containertwo">
                <img src={shuttle} alt="shutle" />
              </div>
              <div className="Containerthree">
                <img src={football} alt="footbal" />
              </div>
              <div className="Containerfour">
                <img src={cricket} alt="cricket" />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "10rem",
            marginRight: "15rem",
            marginLeft: "5rem",
          }}
          className=" d-flex align-items-center justify-content-between flex-wrap "
        >
          <div className="whatappImgContainer">
            <img src={telegram} alt="telgram" />
          </div>
          <div className="whatappImgContainer">
            <img src={whatapp} alt="whatsapp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerOne;
