const Footer = () => {
  return (
    <footer className="footer-glass text-light mt-5">
      <div className="container py-5">

        <div className="row g-4">

          
          <div className="col-md-4 text-center text-md-start">
            <h4 className="fw-bold">CodeRide Rental</h4>
            <p className="text-secondary">
              Luxury • Affordable • Instant Booking
            </p>

            <div>
              <a href="#" className="social">Instagram</a>
              <a href="#" className="social">Facebook</a>
              <a href="#" className="social">Twitter</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 text-center">
            <h5>Subscribe Newsletter</h5>
            <p className="text-secondary">
              Get offers & updates
            </p>

            <div className="d-flex gap-2 justify-content-center">
              <input
                className="form-control newsletter-input"
                placeholder="Enter email"
              />
              <button className="btn btn-info">
                Subscribe
              </button>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-md-4 text-center">
            <h5>Our Location</h5>

            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        <hr className="my-4 border-secondary" />

        <p className="text-center text-secondary mb-0">
          © {new Date().getFullYear()} CodeRide Rental. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
