import Colors from "../helpers/Colors";

import "./Section.css";

const Section = ({ bgColor, icon, alt, title, desc, border }) => {
  return (
    <div
      className="sectionCard p-5 d-flex align-items-start justify-content-center flex-column"
      style={{ backgroundColor: bgColor, borderRadius: border }}
    >
      <img className="iconImage" src={icon} alt={alt} />
      <h1 className="title" style={{ color: Colors.VERY_LIGHT_GRAY }}>
        {title}
      </h1>
      <p className="mt-4 descCard" style={{ color: Colors.TRANSPARENT_WHITE }}>
        {desc}
      </p>
      <button
        className="btnLearn btn rounded-5"
        style={{ color: bgColor, backgroundColor: Colors.VERY_LIGHT_GRAY }}
      >
        Learn More
      </button>
    </div>
  );
};

export default Section;
