// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cars from './pages/Cars';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<Router>
			<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cars" element={<Cars />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
