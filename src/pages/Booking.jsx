import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import cars from "../data/cars";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(c => c.id == id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    start: "",
    end: "",
    coupon: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Calculate days
  const days =
    form.start && form.end
      ? Math.max(
          1,
          Math.ceil(
            (new Date(form.end) - new Date(form.start)) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const base = days * car.priceDay;

  // Coupon
  const discount = form.coupon === "SAVE10" ? base * 0.1 : 0;

  // Tax + GST
  const tax = base * 0.05;
  const gst = base * 0.18;

  const total = base + tax + gst - discount;

  const validate = () => {
    if (!form.name || !form.email || !form.phone || !form.start || !form.end) {
      setError("Fill all fields");
      return false;
    }
    return true;
  };

  const handlePay = () => {
    if (!validate()) return;

    setLoading(true);
    setError("");

    setTimeout(() => {
      const booking = {
        ...form,
        car: car.brand,
        days,
        base,
        tax,
        gst,
        discount,
        total,
        date: new Date().toLocaleString()
      };

      const old = JSON.parse(localStorage.getItem("bookings")) || [];
      localStorage.setItem("bookings", JSON.stringify([...old, booking]));

      setLoading(false);

      navigate("/success", { state: booking });
    }, 2000);
  };

  return (
    <div className="container my-5">
      <h3>Booking: {car.brand}</h3>

      {error && <p className="text-danger">{error}</p>}

      <input className="form-control my-2" placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input className="form-control my-2" placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input className="form-control my-2" placeholder="Phone"
        onChange={e => setForm({ ...form, phone: e.target.value })} />

      <label>Start Date</label>
      <input type="date" className="form-control my-2"
        onChange={e => setForm({ ...form, start: e.target.value })} />

      <label>End Date</label>
      <input type="date" className="form-control my-2"
        onChange={e => setForm({ ...form, end: e.target.value })} />

      <input className="form-control my-2" placeholder="Coupon (SAVE10)"
        onChange={e => setForm({ ...form, coupon: e.target.value })} />

      <hr />

      <p>Days: {days}</p>
      <p>Base: ₹{base}</p>
      <p>Tax (5%): ₹{tax.toFixed(2)}</p>
      <p>GST (18%): ₹{gst.toFixed(2)}</p>
      <p>Discount: -₹{discount.toFixed(2)}</p>

      <h5>Total: ₹{total.toFixed(2)}</h5>

      <button className="btn btn-success mt-3"
        onClick={handlePay} disabled={loading}>
        {loading ? "Processing..." : "Pay & Book"}
      </button>
    </div>
  );
};

export default Booking;
