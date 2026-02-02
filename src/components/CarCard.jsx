import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
      <div className="card shadow h-100">
        <img
          src={car.image}
          className="card-img-top img-fluid"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5>{car.brand}</h5>
          <p className="mb-1">Fuel: {car.fuel}</p>
          <p className="mb-3">Seats: {car.seats}</p>

          <Link
            to={`/car/${car.id}`}
            className="btn btn-primary mt-auto"
          >
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
