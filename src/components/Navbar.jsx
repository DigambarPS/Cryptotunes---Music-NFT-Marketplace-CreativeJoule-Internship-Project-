import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.jpg";
import "./style.css";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuClick, setmenuClick] = useState("/");
  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    setmenuClick(location.pathname);
  }, [location]);

  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={goToHome}>
          <img src={Logo} alt="" />
        </div>
        <nav>
          <ul className="menu">
            <li id={menuClick === "/" ? "active" : ""}>
              <Link className="link" to={"/"}>
                HOME
              </Link>
            </li>
            <li id={menuClick === "/marketplace" ? "active" : ""}>
              <Link className="link" to="/marketplace">
                MARKETPLACE
              </Link>
            </li>
            <li id={menuClick === "/create" ? "active" : ""}>
              <Link className="link" to={"/create"}>
                CREATE
              </Link>
            </li>
            <li id={menuClick === "/my-collections" ? "active" : ""}>
              {/* <button className="loginbutton" type="submit" onClick={goToHome}> */}
              <Link className="link" to={"/my-collections"}>
                MY COLLECTIONS
              </Link>
              {/* </button> */}
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
