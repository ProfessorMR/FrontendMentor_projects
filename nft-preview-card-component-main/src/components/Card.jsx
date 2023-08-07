import Colors from "../helpers/Colors";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

import "./Card.css";

const Card = () => {
  return (
    <div
      className="cardNft position-relative p-4 my-2 rounded-4 d-flex align-items-center justify-content-center flex-column"
      style={{ backgroundColor: Colors.VERY_DARK_BLUE_CARD }}
    >
      <CardImage />
      <CardInfo />
    </div>
  );
};

export default Card;
