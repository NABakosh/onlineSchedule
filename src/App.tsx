import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
  
  
  return (
		<div className='App'>
			<Router>
				<Header />
        <Routes>
				<Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='*' element={<NotFound />} />
        </Routes>
          

				<footer>
					<a>Copyright © 2025 NABako. All rights reserved.</a>
				</footer>
			</Router>
		</div>
	)
}

export default App
