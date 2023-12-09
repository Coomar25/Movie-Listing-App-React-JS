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
        "http://localhost:4000/auth/registeruser",
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
    <div class="sign section--full-bg" data-bg="img/bg.jpg">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="sign__content">
              {/* <!-- registration form --> */}
              <form action="signup.html#" class="sign__form">
                <a href="index.html" class="sign__logo">
                  <img src={logo} alt="" />
                </a>

                <div class="sign__group">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="sign__input"
                    placeholder="Full Name"
                  />
                </div>

                <div class="sign__group">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="sign__input"
                    placeholder="Email"
                  />
                </div>

                <div class="sign__group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="sign__input"
                    placeholder="Password"
                  />
                </div>

                <div class="sign__group">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    class="sign__input"
                    placeholder="Password"
                  />
                </div>

                <button
                  onClick={handleRegisterSubmiti}
                  class="sign__btn"
                  type="button"
                >
                  Sign up
                </button>

                <span class="sign__delimiter">or</span>

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
