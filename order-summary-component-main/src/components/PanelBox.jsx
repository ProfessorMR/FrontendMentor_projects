import {
  BRIGHT_BLUE,
  DARK_BLUE,
  DESATURATED_BLUE,
  VERY_PALE_BLUE,
} from "../helpers/Colors";

import "./PanelBox.css";
import iconMusic from "../assets/images/icon-music.svg";

const PanelBox = () => {
  return (
    <div className="panelBox" style={{ backgroundColor: VERY_PALE_BLUE }}>
      <div className="panelName">
        <img className="iconImage" src={iconMusic} alt="iconImage" />
        <div className="info">
          <h1 className="titleInfo" style={{ color: DARK_BLUE }}>
            Annual Plan
          </h1>
          <span className="amount" style={{ color: DESATURATED_BLUE }}>
            $59.99/year
          </span>
        </div>
      </div>
      <p className="change" style={{ color: BRIGHT_BLUE }}>
        {" "}
        Change
      </p>
    </div>
  );
};

export default PanelBox;
