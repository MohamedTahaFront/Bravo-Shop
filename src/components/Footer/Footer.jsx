import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g">
          <div className="col-lg-3 col-md-3">
            <div className="box">
              <h3 className="f-title">Get In Touch</h3>
              <p className="f-p">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor. Rebum tempor no vero est magna amet no
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="box">
              <h3 className="f-title">QUICK SHOP</h3>
              <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/">Cart</NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="box">
              <h3 className="f-title">Shop Media</h3>
              <div className="links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="box">
              <h3 className="f-title">NEWSLETTER</h3>
              <p className="f-p">
                Duo stet tempor ipsum sit amet magna ipsum tempor est
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your email adress"
                  aria-label="Your email adress"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-main"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
