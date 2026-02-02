import { useState } from "react";
import cars from "../data/cars";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";

const Cars = () => {
  const [search, setSearch] = useState("");

  const filtered = cars.filter(car =>
    car.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-5">
      <SearchBar search={search} setSearch={setSearch} />

      <div className="row g-4">
        {filtered.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
