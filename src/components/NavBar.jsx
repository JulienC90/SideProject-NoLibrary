import { Link } from 'react-router-dom';
import '../style/NavBar.css';
export default function NavBar() {
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/">
						<button type="button" id="home">
							Home
						</button>
					</Link>
				</li>
				<li>
					<Link to="/cars">
						<button type="button" id="cars">
							Cars
						</button>
					</Link>
				</li>
				<li>
					<Link to="/about">
						<button type="button" id="about">
							About
						</button>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
