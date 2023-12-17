import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../../context/CountryContext";
import {
  getCountry,
  getCountryFromCode,
} from "../../services/countriesServices";
import Spinner from "../Spinner";

const Country = () => {
  const { loading, setLoading } = useContext(CountryContext);

  const [country, setCountry] = useState([]);
  const [codeNames, setCodeNames] = useState([]);

  const { countryName } = useParams();

  const getCountryNames = async (countryCodes) => {
    try {
      const promises = countryCodes.map((code) => getCountryFromCode(code));
      const countryNames = await Promise.all(promises);

      setCodeNames(() => {
        return countryNames.map((name) => {
          return name.data[0].name.common;
        });
      });
    } catch (err) {
      console.error("Error: ", err.message);
      throw err;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: countryInfo } = await getCountry(countryName);
        setCountry(countryInfo);

        if (typeof countryInfo[0].borders !== "undefined") {
          await getCountryNames(countryInfo[0].borders);
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log("Error: ", err.message);
      }
    };

    fetchData();
  }, [countryName, setLoading]);

  return (
    <section className="flex mt-10 px-10 md:px-20 single-country-page">
      <div className="container mx-auto">
        {loading ? (
          <Spinner />
        ) : (
          <div className="mt-1">
            <Link
              to="/"
              className="w-max flex px-10 py-2 items-center justify-start back-btn rounded-md shadow-xl"
            >
              <ion-icon name="arrow-back-outline"></ion-icon>
              <p className="text-md">Back</p>
            </Link>
            {country.length > 0 ? (
              <div className="flex justify-between flex-row-reverse gap-20 mt-20">
                <div className="w-2/4">
                  <h1 className="font-extrabold text-3xl">
                    {country[0].name.common}
                  </h1>
                  <div className="flex justify-between gap-5 mt-7">
                    <div>
                      <p className="font-semibold">
                        Native Name:{" "}
                        <span className="font-light">
                          {" "}
                          {Object.values(country[0].name.nativeName)
                            .map((language) => language.common)
                            .join(", ")}
                        </span>
                      </p>
                      <p className="font-semibold mt-2">
                        Population:{" "}
                        <span className="font-light">
                          {" "}
                          {parseInt(country[0].population).toLocaleString()}
                        </span>
                      </p>
                      <p className="font-semibold mt-2">
                        Region:{" "}
                        <span className="font-light">{country[0].region}</span>
                      </p>
                      <p className="font-semibold mt-2">
                        Sub Region:{" "}
                        <span className="font-light">
                          {country[0].subregion}
                        </span>
                      </p>
                      <p className="font-semibold mt-2">
                        Capital:{" "}
                        <span className="font-light">
                          {" "}
                          {country[0].capital[0]}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Top Level Domain:{" "}
                        <span className="font-light"> {country[0].tld}</span>
                      </p>
                      <p className="font-semibold mt-2">
                        Currencies:{" "}
                        <span className="font-light">
                          {" "}
                          {Object.entries(country[0].currencies)[0][1].name}
                        </span>
                      </p>
                      <p className="font-semibold mt-2">
                        Languages:{" "}
                        <span className="font-light">
                          {Object.values(country[0].languages).join(", ")}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-16">
                    <p className="font-semibold">Border Countries: </p>
                    <div className="flex flex-wrap ms-4 gap-3">
                      {codeNames.length > 0 ? (
                        codeNames.map((country) => (
                          <Link
                            to={`/${country}`}
                            key={country}
                            className="px-4 py-1 text-center text-sm back-btn rounded-sm shadow-lg"
                          >
                            {country}
                          </Link>
                        ))
                      ) : (
                        <p className="w-24 py-1 text-center text-sm back-btn rounded-sm shadow-lg">
                          no boundaries
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-2/4">
                  <img
                    src={country[0].flags.svg}
                    className="w-full object-cover aspect-video shadow-md"
                    alt={country[0].flags.alt}
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};

export default Country;