import React from 'react'
import avatar from '../assets/img/avatar.svg'
import {removeTokenFromCookie} from '../service/TokenService'
import { useNavigate } from 'react-router-dom'
import {successTOast} from '../component/ToastMessage'
import { getTokenFromCookie } from '../service/TokenService'

const Profile = () => {
	const navigate = useNavigate();
	const {user} = getTokenFromCookie();
	const handleLogout = () => {
		removeTokenFromCookie();
		successTOast('Logout Successfully');
		setTimeout(() => {
			navigate('/signin');
			window.location.reload();
		}, 1500);
	}
  return (
    <div className="container">
        {/* <!-- profile --> */}
	<div class="catalog catalog--page">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="profile">
						<div class="profile__user">
							<div class="profile__avatar">
								{/* <img src={avatar} alt="" /> */}
							</div>
							<div class="profile__meta">
								<h3>{user.username}</h3>
								{/* <span>FlixTV ID: {user.id}</span> */}
							</div>
						</div>


						<button onClick={handleLogout} class="profile__logout" type="button">
							<span>Sign out</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path></svg>
						</button>
					</div>
				</div>
			</div>
		</div>

	
	</div>
    </div>
  )
}

export default Profile