import { Link } from 'react-router-dom';
import '../style/NavBar.css';
export default function NavBar() {
	return (
		<nav className="nav">
			<ul>
				<li>
					<button type="button" id="home">
						<Link to="/">Home</Link>
					</button>
				</li>
				<li>
					<button type="button" id="cars">
						<Link to="/cars">Cars</Link>
					</button>
				</li>
				<li>
					<button type="button" id="about">
						<Link to="/about">About</Link>
					</button>
				</li>
			</ul>
		</nav>
	);
}
