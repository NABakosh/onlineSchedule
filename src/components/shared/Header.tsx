import logo from '@assets/header/logo.svg'
import '@sass/shared/header.scss'
import userImg from '@assets/share/user.svg'
const Header: React.FC = () => {
	return (
		<header>
			<nav>
				<img src={logo} alt='logo'></img>
				<h2>
					Online<br></br> Schedule
				</h2>
			</nav>
			<div className='week-days'>
				<ul>
					<li>Пн</li>
					<li>Вт</li>
					<li>Ср</li>
					<li>Чт</li>
					<li>Пт</li>
					<li>Сб</li>
					<li>Вс</li>
				</ul>
			</div>
			<div className='login-btn'>
				<button>Log in</button>
				<img src={userImg} alt='user img'></img>
			</div>
		</header>
	)
}
export default Header
