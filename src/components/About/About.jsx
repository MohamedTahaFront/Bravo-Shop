import "./About.css";
import shop from "../../assets/images/about.jpg";

function About() {
  return (
    <div className="About">
      <div className="container">
        <h2 className="h2">
          <span>About</span> Us
        </h2>
        <div className="row g">
          <div className="col-lg-5">
            <div className="image">
              <img src={shop} alt="shop" />
            </div>
          </div>
          <div className="col-lg-7 ">
            <div className="details">
              <h2 className="h2">
                <span>Welcome To </span>Bravo Shop
              </h2>
              <p className="fw-bold m-0">
                <span>Bravo Shop </span>is Best online Shopping Company Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                expedita dolore omnis cumque ipsa vel nam non necessitatibus
                eius, molestiae officiis, rem et distinctio? Nisi voluptates
                amet in aliquam sapiente.
              </p>
              <button className="btn btn-secondary">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
