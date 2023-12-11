import SpinnerGIF from "../../assets/Flag_of_Germany.svg";

const CountryCard = () => {
  return (
    <section className="mt-10 country-cards-main">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-4 gap-20">
          <div className="rounded-lg shadow-md card">
            <div className="w-full">
              <img src={SpinnerGIF} className="w-full rounded-t-lg" alt="country" />
            </div>
            <div className="py-9 px-6">
              <h4 className="font-extrabold">Germany</h4>
              <div className="mt-3">
                <p className="font-semibold text-sm mt-1">
                  Poplulation: <span className="font-normal">1000123</span>
                </p>
                <p className="font-semibold text-sm mt-1">
                  Reagion: <span className="font-normal">Europe</span>
                </p>
                <p className="font-semibold text-sm mt-1">
                  Capital: <span className="font-normal">Berlin</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryCard;
