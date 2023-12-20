import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/countries/${encodeURIComponent(country.name.official)}`}>
      <div className="rounded-lg shadow-md card">
        <div className="w-full h-40">
          <img
            src={country.flags.png}
            className="w-full h-full rounded-t-lg"
            alt={country.name.common}
          />
        </div>
        <div className="py-9 px-6">
          <p className="font-extrabold">{country.name.common}</p>
          <div className="mt-3">
            <p className="font-semibold text-sm mt-1">
              Poplulation:{" "}
              <span className="font-normal">
                {parseInt(country.population).toLocaleString()}
              </span>
            </p>
            <p className="font-semibold text-sm mt-1">
              Region: <span className="font-normal">{country.continents}</span>
            </p>
            <p className="font-semibold text-sm mt-1">
              Capital: <span className="font-normal">{country.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
