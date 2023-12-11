import React, { useState } from 'react'
import Logo from '../assets/img/logo.svg'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { successTOast, errorToast, warningToast } from "./ToastMessage";
import { setTokenInCookie } from '../service/TokenService';




const SignIn = () => {

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate =useNavigate();



	const handleSubmitForm = async (e) => {
		e.preventDefault();
		try{
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/loginuser`, {
                email: email,
                password: password
            });
			console.log(response.data.success);
			console.log(response.data.warning);
			console.log(response.data.token);
			successTOast(response.data.success);
			warningToast(response.data.warning);
            const token = response.data.token;
            const user = response.data.user;
			setTokenInCookie(token, user);

			setTimeout(() => {
				navigate('/');
			    window.location.reload();
			},  1500); 

        }catch(error){
			errorToast(error.message);
            console.log('Login Failed', error);
        }
	}


  return (
	<div className="sign section--bg" data-bg="">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="sign__content">
						<form action="signin.html#" className="sign__form">
							<a href="index.html" className="sign__logo">
								<img src={Logo} alt="" />
							</a>

							<div className="sign__group">
								<input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} className="sign__input" placeholder="Email" required/>
							</div>

							<div className="sign__group">
								<input type="password" value={password} onChange={ (e)=> setPassword(e.target.value)} className="sign__input" placeholder="Password" required/>
							</div>

						
							
							<button onClick={handleSubmitForm} className="sign__btn" type="button">Sign in</button>

							<span className="sign__delimiter">or</span>

						

							<span className="sign__text">Don't have an account?  <Link to="/signup">Sign up! </Link>   </span>

							<span className="sign__text"><a href="forgot.html">Forgot password?</a></span>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

  )
}

export default SignIn