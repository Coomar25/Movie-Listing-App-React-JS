import React from 'react'
import Logo from '../assets/img/logo.svg'
const SignIn = () => {
  return (
	<div class="sign section--bg" data-bg="">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="sign__content">
						<form action="signin.html#" class="sign__form">
							<a href="index.html" class="sign__logo">
								<img src={Logo} alt="" />
							</a>

							<div class="sign__group">
								<input type="text" class="sign__input" placeholder="Email"/>
							</div>

							<div class="sign__group">
								<input type="password" class="sign__input" placeholder="Password"/>
							</div>

							<div class="sign__group sign__group--checkbox">
								<input id="remember" name="remember" type="checkbox" checked="checked"/>
								<label for="remember">Remember me</label>
							</div>
							
							<button class="sign__btn" type="button">Sign in</button>

							<span class="sign__delimiter">or</span>

						

							<span class="sign__text">Don't have an account? <a href="signup.html">Sign up!</a></span>

							<span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

  )
}

export default SignIn