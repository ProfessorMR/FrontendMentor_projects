import imageEquilibrium from "../assets/images/image-equilibrium.jpg";

import "./CardImage.css";
import iconView from "../assets/images/icon-view.svg";

const CardImage = () => {
  return (
    <div className="mainImageNft w-100 position-relative">
      <img
        className="w-100 rounded-3"
        src={imageEquilibrium}
        alt="equilibrium"
      />
      <div className="viewBox position-absolute rounded-3 top-0 w-100 h-100 d-flex align-items-center justify-content-center">
        <img src={iconView} alt="iconView" />
      </div>
    </div>
  );
};

export default CardImage;
