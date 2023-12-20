import { useContext, useEffect, useRef, useState } from "react";
import { CountryContext } from "../../context/CountryContext";

const RegionCountry = () => {
  const { setSelectedRegion } = useContext(CountryContext);

  const [isDropdown, setIsDropdown] = useState(false);
  const [btnTextDropdown, setBtnTextDropdown] = useState("Filter by Region");

  const dropdown = useRef(null);

  const continents = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleContinentClick = (continent) => {
    setSelectedRegion(continent);
    setBtnTextDropdown(continent);

    setIsDropdown(false);
  };

  useEffect(() => {
    if (isDropdown) {
      dropdown.current.classList.add("flex");
      dropdown.current.classList.remove("hidden");
    } else {
      dropdown.current.classList.add("hidden");
      dropdown.current.classList.remove("flex");
    }
  }, [isDropdown]);

  return (
    <div className="dropdown-main relative w-52 mt-10 md:m-0">
      <div
        onClick={handleDropdown}
        className="dropdown-btn rounded shadow-lg cursor-pointer flex items-center justify-between px-6 py-3"
      >
        <h1 className="font-semibold me-8 text-sm">{btnTextDropdown}</h1>
        <ion-icon name="chevron-down-outline" aria-label="chevron"></ion-icon>
      </div>
      <div
        className="absolute dropdown-content rounded shadow w-52 mt-1 hidden z-10"
        ref={dropdown}
      >
        <ul className="w-full">
          {continents.map((continent) => (
            <li
              onClick={() => handleContinentClick(continent)}
              key={continent}
              className="px-6 py-1.5 font-semibold cursor-pointer"
            >
              {continent}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegionCountry;
