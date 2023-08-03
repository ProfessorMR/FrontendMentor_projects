import { DESATURATED_BLUE, VERY_PALE_BLUE } from "../helpers/Colors";
import iconMusic from "../assets/images/icon-music.svg";

import "./HeroInfo.css";

const HeroInfo = () => {
  return (
    <div className="heroInfo" style={{ backgroundColor: VERY_PALE_BLUE }}>
      <h1>Order Summary</h1>
      <p style={{ color: DESATURATED_BLUE }}>
        {" "}
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="planBox">
        <div className="panelName">
          <img src={iconMusic} alt="iconImage" />
          <div className="info">
            <h4>Annual Plan</h4>
            <span>$59.99/year</span>
          </div>
        </div>
        <p> Change</p>
      </div>
      <div className="btnBoxes">
        <button className="paymentBtn">Proceed to Payment</button>
        <button className="cancelBtn"> Cancel Order</button>
      </div>
    </div>
  );
};

export default HeroInfo;
