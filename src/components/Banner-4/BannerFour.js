import React from "react";
import "./BannerFour.css";
import tripleFive from "../../Assets/Roleximage/tripleFive.png";
import Acc from "../../Assets/Roleximage/acc.png";
import Rolex from "../../Assets/Roleximage/rolexbook.png";
import mama from "../../Assets/Roleximage/mama.png";
import Bester from "../../Assets/Roleximage/bester.png";
import ourCard from "../../Assets/Roleximage/ourCards.png";
import ourBoard from "../../Assets/Roleximage/ourBoard.png";

const BannerFour = () => {
  const cardObj = [
    { id: 0, path: "", image: tripleFive },
    { id: 0, path: "/", image: Acc },
    { id: 0, path: "", image: Rolex },
    { id: 0, path: "", image: mama },
    { id: 0, path: "", image: Bester },
  ];

  return (
    <div className="fourthMainContainer">
      <p className="partnerTitle">
        Our <span className="partnerTitleOne"> Partners</span>
      </p>
      <div className="mainCardContainer">
        <div className="cardGrid">

          {cardObj.map((item, index) => {
            return (
              <div
                key={index}
                className="card_container"
              >
                <div style={{ width: "100%", height:'100px' }}>
                  <img width={"100%"} height={'100%'} src={item?.image} alt="img" className="image" />
                </div>
                <div className="powerContainerOne mt-4">
                  <div>
                    <p className="powerText">Powered by</p>
                    <p className="rolexTextOne">Rolexbook</p>
                  </div>
                </div>
                <div className="playNowContainer">READ NOW</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="ourCardConatiner">
        <img src={ourCard} />
      </div>
      <div className="ourBoardConatiner">
        <img src={ourBoard} />
      </div>
    </div>
  );
};

export default BannerFour;
