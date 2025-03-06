
import { Link } from "react-router-dom"

const Header: React.FC = () =>{
    return (
			<>
				<header>
					<div className='logo'>
						<img width={100} src='/assets/logo.png' alt='logo' />
						<h3>
							Online
							<br />
							Schedule
						</h3>
					</div>
					<nav>
						<ul>
							<li className='day'>Пн</li>
							<li className='day'>Вт</li>
							<li className='day current'>Ср</li>
							<li className='day'>Чт</li>
							<li className='day'>Пт</li>
							<li className='day weekend'>Сб</li>
							<li className='day weekend current'>Вс</li>
						</ul>
						<button>
							<Link to='/auth'>Войти</Link>
						</button>
					</nav>
				</header>
			</>
		)
}
export default Header