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
        <img src={iconMusic} alt="iconImage" />
        <div className="info">
          <h4 style={{ color: DARK_BLUE }}>Annual Plan</h4>
          <span style={{ color: DESATURATED_BLUE }}>$59.99/year</span>
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
