import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header class="header header--static">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="header__content">
              <Link to="/" class="header__logo">
                <img src={logo} />
              </Link>

              <ul class="header__nav">
                <li class="header__nav-item">
                  {/* <Link to="/" class="header__nav-link">
                    Home
                  </Link> */}
                </li>

              

              </ul>

              <Link to="/signin" class="header__search-btn">
                <span>Sign in</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
                </svg>
              </Link>

           
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;