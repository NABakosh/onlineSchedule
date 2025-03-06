import { useState } from 'react'
import '../scss/auth.scss' 

const Auth: React.FC = () => {
    const [Auth,SetAuth] = useState(false)
    
	return (
		<div className='Auth'>
			<div className='tab'>
				<button onClick={() => SetAuth(false)}>Вход</button>
				<div className={`tab-background ${Auth ? 'register' : ''}`}></div>
				<button onClick={() => SetAuth(true)}>Регистрация </button>
			</div>
			<form className={Auth ? 'visible' : ''}>
				<h6>{Auth ? 'Зарегистрироваться' : 'Войти'}</h6>
				<div>
					<label>
						<input placeholder='Почта' />
					</label>
					<label>
						<input placeholder='Пароль' />
					</label>
					{Auth && (
						<label>
							<input className='show-conf' placeholder='Потвердиите пароль' />
						</label>
					)}
				</div>
				<button className={Auth ? 'expanded' : ''}>
					{Auth ? 'Зарегистрироваться' : 'Войти'}
				</button>
			</form>
		</div>
	)
}
export default Auth
