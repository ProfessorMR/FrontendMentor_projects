import heroImg from "../assets/images/illustration-hero.svg";

import "./HeroImage.css";

const HeroImage = () => {
  return (
    <div className="heroImage">
      <img src={heroImg} alt="hero" />
    </div>
  );
};

export default HeroImage;
