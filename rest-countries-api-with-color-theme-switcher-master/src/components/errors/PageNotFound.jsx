import { Link } from "react-router-dom";
import image404 from "../../assets/images/image404.svg";


const PageNotFound = () => {
  return (
    <section className="flex mt-10">
      <div className="container mx-auto">
        <div className="w-full flex justify-center items-center flex-col">
          <img src={image404} className="w-72" alt="404" />
          <h3 className="font-semibold">page is not found</h3>
          <Link
              to="/"
              className="mt-10 w-max px-10 py-2 back-homepage rounded-md shadow-xl"
            >
              <p className="text-md">Go Back Home</p>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
