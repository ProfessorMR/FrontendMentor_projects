import { BRIGHT_BLUE, DARK_BLUE, DESATURATED_BLUE } from "../helpers/Colors";
import PanelBox from "./PanelBox";

import "./HeroInfo.css";

const HeroInfo = () => {
  return (
    <div className="heroInfo">
      <h1 className="title" style={{ color: DARK_BLUE }}>Order Summary</h1>
      <p className="desc" style={{ color: DESATURATED_BLUE }}>
        {" "}
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <PanelBox />
      <div className="btnBoxes">
        <button className="paymentBtn" style={{ backgroundColor: BRIGHT_BLUE }}>
          Proceed to Payment
        </button>
        <span className="cancelBtn" style={{ color: DESATURATED_BLUE }}>Cancel Order</span>
      </div>
    </div>
  );
};

export default HeroInfo;
