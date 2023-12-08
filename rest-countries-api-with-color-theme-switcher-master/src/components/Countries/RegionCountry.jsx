import { useEffect, useRef, useState } from "react";

const RegionCountry = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [btnTextDropdown, setBtnTextDropdown] = useState("Filter by Region");

  const dropdown = useRef(null);

  const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleContinentClick = (continent) => {
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
    <div>
      <div
        onClick={handleDropdown}
        className="rounded shadow cursor-pointer flex items-center justify-between px-6 py-3"
      >
        <h3 className="font-semibold me-8">{btnTextDropdown}</h3>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      <div className="rounded shadow w-full mt-1 hidden z-10" ref={dropdown}>
        <ul>
          {continents &&
            continents.map((continent) => (
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
