import React from "react";
import logo from "../assets/img/logo.svg";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { successTOast, errorToast, warningToast } from "./ToastMessage";
import { useNavigate } from "react-router-dom";


const SIgnUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");




  const handleRegisterSubmiti = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("password did not match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }



    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/registeruser`,
        {
          username: name,
          email: email,
          password: password,
          confirmpassword: confirmPassword,
        }
      );

    successTOast(response.data.message);
	  warningToast(response.data.warning);

    setTimeout(()=> {
      navigate('/signin');
    }, 2000);

    } catch (error) {
		errorToast(error.message);
      console.log("Register Failed", error);
    }
  };

  return (
    // <!-- sign in -->
    <div className="sign section--full-bg" data-bg="img/bg.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              {/* <!-- registration form --> */}
              <form action="signup.html#" className="sign__form">
                <a href="index.html" className="sign__logo">
                  <img src={logo} alt="" />
                </a>

                <div className="sign__group">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="sign__input"
                    placeholder="Full Name"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="sign__input"
                    placeholder="Email"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="sign__input"
                    placeholder="Password"
                  />
                </div>

                <div className="sign__group">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="sign__input"
                    placeholder="Password"
                  />
                </div>

                <button
                  onClick={handleRegisterSubmiti}
                  className="sign__btn"
                  type="button"
                >
                  Sign up
                </button>

                <span className="sign__delimiter">or</span>

                <span class="sign__text">
                  Already have an account? <a href="signin.html">Sign in!</a>
                </span>
              </form>
              {/* <!-- registration form --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;
