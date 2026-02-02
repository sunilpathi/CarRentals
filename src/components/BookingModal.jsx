const BookingModal = ({ car, amount }) => {
  return (
    <div className="modal fade" id="bookingModal">
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <h4>{car.brand}</h4>
          <p>Total: ₹{amount}</p>
          <button className="btn btn-success">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
