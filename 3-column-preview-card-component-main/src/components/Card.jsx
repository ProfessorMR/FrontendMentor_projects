import Section from "./Section";
import Colors from "../helpers/Colors";
import Info from "../helpers/Info";
import { LUXURY_BORDER, SEDANS_BORDER } from "../helpers/Border";

import iconLuxury from "../assets/images/icon-luxury.svg";
import iconSedans from "../assets/images/icon-sedans.svg";
import iconSuvs from "../assets/images/icon-suvs.svg";

const Card = () => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center my-2">
      <Section
        bgColor={Colors.BRIGHT_ORANGE}
        icon={iconSedans}
        alt="sedans"
        title={Info[0].sedansTitle}
        desc={Info[0].sedansDesc}
        border={SEDANS_BORDER}
      />
      <Section
        bgColor={Colors.DARK_CYAN}
        icon={iconSuvs}
        alt="suvs"
        title={Info[1].suvsTitle}
        desc={Info[1].suvsDesc}
      />
      <Section
        bgColor={Colors.VERY_DARK_CYAN}
        icon={iconLuxury}
        alt="luxury"
        title={Info[2].luxuryTitle}
        desc={Info[2].luxuryDesc}
        border={LUXURY_BORDER}
      />
    </div>
  );
};

export default Card;
