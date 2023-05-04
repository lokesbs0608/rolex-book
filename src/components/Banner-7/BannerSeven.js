import React from "react";
import "./BannerSeven.css";
import NetWork from "../../Assets/Roleximage/network.png";
import HeadPhone from "../../Assets/Roleximage/headPhone.png";
import ThumbUp from "../../Assets/Roleximage/thumbsUp.png";
import hands from "../../Assets/Roleximage/hand.png";
import CreditCard from "../../Assets/Roleximage/creditCard.png";
import FingerPrint from "../../Assets/Roleximage/figerPrint.png";
const BannerSeven = () => {
  return (
    <div className="sevethMainDiv">
      <p className="howText">
        Why <span className="seventhBannerText">RolexBook</span>
      </p>
      <div className="seventhMainItemsDiv">
        <div className="seventhItems">
          <div className="seventhDetail">
            <img src={NetWork} />
          </div>
          <div>
            <p className="onLineText">ONLINE ID</p>
            <p className="sevenThItemText">
              Get your online cricket/sports id with us and instantly start
              Playing. Message us to get your ID now.
            </p>
          </div>
        </div>
        <div className="seventhItems">
          <div className="seventhDetail">
            <img src={HeadPhone} />
          </div>
          <div>
            <p className="onLineText">ONLINE ID</p>

            <p className="sevenThItemText">
              We have a team of experts who available 24/7 to guide you through
              our whatsApp chats.
            </p>
          </div>
        </div>
        <div className="seventhItems">
          <div className="seventhDetail">
            <img src={ThumbUp} />
          </div>
          <div>
            <p className="onLineText">ONLINE ID</p>

            <p className="sevenThItemText">
              Transparency and accuracy is the most important for us and for our
              customer. We deal in the most transparent way.
            </p>
          </div>
        </div>
        <div className="seventhItems">
          <div className="seventhDetail">
            <img src={hands} />
          </div>
          <div>
            <p className="onLineText">ONLINE ID</p>
            <p className="sevenThItemText">
              RolexBook provides instant service of id withdrawal & refilling
              with min to max amount.
            </p>
          </div>
        </div>
        <div className="seventhItems">
          <div className="seventhDetail">
            <img src={CreditCard} />
          </div>
          <div>
            <p className="onLineText">ONLINE ID</p>
            <p className="sevenThItemText">
              Multiple methods are available for Paymetns. Customer can pay via
              Net Banking, Bank Transfer, Paytm, Google pay, IMPS, PhonePe etc.
            </p>
          </div>
        </div>
        <div className="seventhItems">
          <div className="seventhDetail">
            <img src={FingerPrint} />
          </div>
          <div>
            <p className="onLineText">ONLINE ID</p>
            <p className="sevenThItemText">
              Security is our Top priority and hence your data and information
              is safe and is not shared at any Point!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSeven;
