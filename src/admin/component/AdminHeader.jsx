import React from 'react'
import logo from '../assets/img/logo.svg'
const AdminHeader = () => {
  return (
	<header className="header">
		<div className="header__content">
			<a href="index.html" className="header__logo">
				<img src={logo} alt="" />
			</a>

			<button className="header__btn" type="button">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</header>
  )
}

export default AdminHeader