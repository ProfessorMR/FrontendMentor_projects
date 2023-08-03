import HeroImage from "./HeroImage";
import HeroInfo from "./HeroInfo";

import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <HeroImage />
      <HeroInfo />
    </div>
  );
};

export default Card;
