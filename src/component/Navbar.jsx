import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { getTokenFromCookie } from "../service/TokenService";

const Navbar = () => {
  const { token } = getTokenFromCookie();
  return (
    <header className="header header--static">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <Link to="/" className="header__logo">
                <img src={logo} />
              </Link>

              {/* <ul className="header__nav">
                <li className="header__nav-item">
                  <Link to="/" className="header__nav-link">
                    Home
                  </Link>
                </li>
              </ul> */}

              <div className="leftButtonNavbar">
                {token ? (
                  " "
                ) : (
                  <Link to="/signin" className="header__user">
                    <span>Sign In</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
                    </svg>
                  </Link>
                )}
              {token ? (


                <ul class="header__nav">
                  <li class="header__nav-item">
                    <a
                      class="header__nav-link"
                      href="index.html#"
                      role="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Profile{" "}
                    </a>

                    <ul
                      class="dropdown-menu header__nav-menu"
                      aria-labelledby="dropdownMenu2"
                    >
                        <li>
                          <Link to={"/profile"}>Profile Settings</Link>
                        </li>



                    
                    </ul>
                  </li>
                </ul>

                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
