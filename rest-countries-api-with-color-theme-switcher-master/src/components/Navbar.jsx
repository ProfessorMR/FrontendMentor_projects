import { useEffect, useState } from "react";

const Navbar = () => {
  const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [isDark, setIsDark] = useState(savedDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));

    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="shadow py-5 px-10 md:px-20 navbar-area">
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-extrabold md:text-lg text-md">Where in the world?</h1>
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setIsDark(!isDark)}
          >
            <ion-icon name="moon-outline" aria-label="moon"></ion-icon>
            <h1 className="font-semibold ms-1 text-sm md:text-md">Dark Mode</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
