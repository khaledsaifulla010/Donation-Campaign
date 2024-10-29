import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex items-center justify-between bg-base-100 px-16 mt-8">
        <div className="navbar-start">
          <NavLink>
            <img src={logo} />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-black text-lg gap-20">
            <NavLink to={"/"}>Home</NavLink>

            <NavLink to={"/donation"}>Donation</NavLink>

            <NavLink to={"/statistics"}>Statistics</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
