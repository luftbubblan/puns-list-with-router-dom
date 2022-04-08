import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Puns from './pages/Puns';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/puns" element={<Puns />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</div>
		
	);
}

export default App;
