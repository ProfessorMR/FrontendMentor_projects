import { useContext, useEffect, useRef, useState } from "react";
import { CountryContext } from "../../context/CountryContext";

const RegionCountry = () => {
  const { countryRegionFilter } = useContext(CountryContext);

  const [isDropdown, setIsDropdown] = useState(false);
  const [btnTextDropdown, setBtnTextDropdown] = useState(() => {
    return localStorage.getItem("selectedRegion") || "Filter by Region";
  });

  const dropdown = useRef(null);

  const continents = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleContinentClick = (continent) => {
    setBtnTextDropdown(continent);
    setIsDropdown(false);

    countryRegionFilter(continent);

    localStorage.setItem("selectedRegion", continent);
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
        <h3 className="font-semibold me-8 text-sm">{btnTextDropdown}</h3>
        <ion-icon name="chevron-down-outline"></ion-icon>
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