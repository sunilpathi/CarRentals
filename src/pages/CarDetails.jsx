import { useParams, Link } from "react-router-dom";
import cars from "../data/cars";

const CarDetails = () => {
  const { id } = useParams();

  const car = cars.find(c => String(c.id) === id);

  if (!car) {
    return <h2 className="text-center my-5">Car not found</h2>;
  }

  return (
    <div className="container my-5">
      <img src={car.image} className="img-fluid mb-3 rounded" />
      <h2>{car.brand}</h2>
      <p>Fuel: {car.fuel}</p>
      <p>Seats: {car.seats}</p>
      <p>₹{car.priceHour}/hour | ₹{car.priceDay}/day</p>

      <Link to={`/booking/${car.id}`} className="btn btn-success">
        Continue Booking
      </Link>
    </div>
  );
};

export default CarDetails;
