import Header from '@components/shared/Header'
import Home from '@components/Home'

import '@sass/index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className='app'>
			<div className='noises'></div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
