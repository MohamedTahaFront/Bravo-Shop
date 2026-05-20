import "./Services.css";
import { FaCheck } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { PiKeyReturnFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";

function Services() {
  return <div className="Services">
    <div className="container">
      <div className="row g">
        <div className="col-lg-3 col-md-6">
          <div className="service-item shadow-sm radius-8">
            <FaCheck/>
            <p>Quality Product</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item shadow-sm radius-8">
            <MdLocalShipping/>
            <p>Free Shipping</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item shadow-sm radius-8">
            <PiKeyReturnFill/>
            <p>14-Day Return</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-item shadow-sm radius-8">
            <BiSupport/>
            <p>24/7 Support</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Services;
