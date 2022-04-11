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
import styled from 'styled-components'
import Pun from './components/Pun';
import Footer from './components/Footer';
import NewPun from './pages/NewPun';

function App() {
	return (
		<Page className="App">
			<BrowserRouter>

				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/puns" element={<Puns />} />
					<Route path="/puns/:postID" element={<Pun />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/newpun" element={<NewPun />} />
				</Routes>
				<Footer />

			</BrowserRouter>
		</Page>
		
	);
}

const Page = styled.div`
	min-width: 1100px;
	background-color: #3B3E45;
`;

export default App;
