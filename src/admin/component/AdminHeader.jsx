import React from 'react'
import logo from '../assets/img/logo.svg'
import styles from "../assets/css/admin.module.css";

const AdminHeader = () => {
  return (
	<header className={styles.header}>
		<div className={styles.header__content}>
			<a href="index.html" className={styles.header__logo}>
				<img src={logo} alt="" />
			</a>

			<button className={styles.header__btn} type="button">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</header>
  )
}

export default AdminHeader