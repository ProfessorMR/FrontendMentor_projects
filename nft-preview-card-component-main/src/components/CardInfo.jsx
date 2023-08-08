import Colors from "../helpers/Colors";

import "./CardInfo.css";
import iconEthereum from "../assets/images/icon-ethereum.svg";
import iconClock from "../assets/images/icon-clock.svg";
import avatar from "../assets/images/image-avatar.png";

const CardInfo = () => {
  return (
    <div className="mt-3 mx-3 mb-2 w-100">
      <div className="text-left">
        <h1 className="titleNft" style={{ color: Colors.WHITE }}>
          Equilibrium #3429
        </h1>
        <p className="fs-6 mt-3" style={{ color: Colors.SOFT_BLUE }}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="d-flex pb-3 align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-center">
            <img src={iconEthereum} alt="iconEthereum" />
            <p
              className="ms-2 mb-0 ethereumText"
              style={{ color: Colors.CYAN }}
            >
              0.041 ETH
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={iconClock} alt="iconClock" />
            <p
              className="ms-2 mb-0 ethereumText"
              style={{ color: Colors.SOFT_BLUE }}
            >
              3 days left
            </p>
          </div>
        </div>
      </div>
      <div className="creator pt-3 d-flex align-items-center justify-content-start">
        <img className="imageCreator" src={avatar} alt="avatar" />
        <p
          className="mb-0 ms-3 textCreator"
          style={{ color: Colors.SOFT_BLUE }}
        >
          Creation of{" "}
          <span className="nameCreator" style={{ color: Colors.WHITE }}>
            {" "}
            Jules Wyvern
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
