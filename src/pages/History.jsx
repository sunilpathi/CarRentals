const History = () => {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <div className="container my-5">
      <h2>Booking History</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Car</th>
              <th>Days</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>
                <td>{b.name}</td>
                <td>{b.car}</td>
                <td>{b.days}</td>
                <td>₹{b.total}</td>
                <td>{b.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
