import { Link } from "react-router-dom";
import carImage from "../assets/RangeRover-transparent.png"; // transparent PNG

const Home = () => {
  return (
    <div className="container my-5" style={{ minHeight: "80vh" }}>
      <div className="row align-items-center">

        {/* Left content */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="display-4 fw-bold">
            Rent Your Dream Car
          </h1>
          <p className="lead mt-3">
            Luxury • Affordable • Instant Booking
          </p>
          <Link
            to="/cars"
            className="btn btn-primary btn-lg mt-3"
          >
            Explore Cars
          </Link>
        </div>

        {/* Right image */}
        <div className="col-md-6 text-center">
          <img
            src={carImage}
            alt="Range Rover"
            className="img-fluid"
            style={{
              maxHeight: "450px",
              objectFit: "contain",
              animation: "slideIn 1.2s ease-out"
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
