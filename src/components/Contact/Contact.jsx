import "./Contact.css";
import map from "../../assets/images/map.jpg"
function Contact() {
  return <div className="Contact">
    <div className="container">
      <h2 className="h2"><span>Contact</span> Us</h2>
      <div className="row g">
        <div className="col-lg-8 col-md-12">
          <form className="shadow-sm">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button className="btn btn-secondary">Send Message</button>
          </form>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="box">
            <div className="map shadow-sm">
                <img src={map} alt="map" className="radius-8" />
            </div>
            <div className="info shadow-sm">
              <p><i className="fas fa-map-marker-alt"></i> 123 Street, City</p>
              <p><i className="fas fa-phone"></i> +1 234 567 890</p>
              <p><i className="fas fa-envelope"></i> info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Contact;
