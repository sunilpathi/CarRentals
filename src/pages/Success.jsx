import { useLocation, Link } from "react-router-dom";
import jsPDF from "jspdf";

const Success = () => {
  const { state } = useLocation();

  if (!state) return <h2>No booking found</h2>;

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Car Rental Invoice", 20, 20);
    doc.text(`Name: ${state.name}`, 20, 40);
    doc.text(`Car: ${state.car}`, 20, 50);
    doc.text(`Days: ${state.days}`, 20, 60);
    doc.text(`Total: ₹${state.total}`, 20, 70);
    doc.text(`Date: ${state.date}`, 20, 80);

    doc.save("invoice.pdf");
  };

  return (
    <div className="container text-center my-5">
      <h2 className="text-success">Booking Successful 🎉</h2>

      <p>Car: {state.car}</p>
      <p>Total: ₹{state.total}</p>

      <button className="btn btn-primary" onClick={downloadPDF}>
        Download Invoice PDF
      </button>

      <br />
      <Link to="/history" className="btn btn-secondary mt-3">
        Booking History
      </Link>
    </div>
  );
};

export default Success;
