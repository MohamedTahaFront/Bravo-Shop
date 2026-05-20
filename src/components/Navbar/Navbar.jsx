import "./Navbar.css";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {  Link, NavLink } from "react-router-dom";
import { MdDarkMode , MdLightMode } from "react-icons/md";


function Navbar({cart , wishList ,handelMode , mode}) {
  return <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className=" container">
    <a className="navbar-brand" >Bravo <span>Shop</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><NavLink to={"/fackapi"} className="dropdown-item mb-1" >Fake API</NavLink></li>
            <li><NavLink to={"/dummyapi"} className="dropdown-item" >Dummy API</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item mode" onClick={handelMode}>
        {!mode ?
          <MdDarkMode />
          : 
          <MdLightMode style={{color:"var(--main-color)"}} />
          }
        </li>
      </ul>
      <div className="icons ">
        <div className="icon"> <Link to={"/wishlist"}><FaHeart/> <sub>({wishList.length})</sub></Link></div>
        <div className="icon"> <Link to={"/cart"}><FaShoppingCart/> <sub>({cart.length})</sub></Link></div>
      </div>
    </div>
  </div>
</nav>;
}

export default Navbar;
