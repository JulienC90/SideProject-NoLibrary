import '../style/About.css';

export default function About() {
	return (
		<>
			<div className="about">
				<div className="about-page">
					<h1 className="title-about">About</h1>
					<div className="green-bar"></div>
				</div>
				<div className="disclaimer">
					<p className="disclaimer-text">
						This project was made under the kind supervision of the Wild Code
						School campus of Toulouse - France,
					</p>
					<p className="disclaimer-text">
						And on behalf of its author, during the time of his formation.
					</p>
				</div>
				<div className="inventory-items">
					<p className="inventory">Ressources used :</p>
					<ul className="items">
						<li>Vite APP - ReactJS</li>
						<li>React Router DOM - ReactJS</li>
						<li>TinyPNG - Minify your pictures !</li>
					</ul>
				</div>
				<div className="inventory-img">
					<p className="inventory">Image Credits :</p>
					<ul className="inventory-list">
						<li>
							<i>Unsplash</i> - Markus Spiske - BG
						</li>
						<li>
							<i>Unsplash</i> - Stock Birken - MG B
						</li>
						<li>
							<i>Unsplash</i> - Nida Oral - MG A
						</li>
					</ul>
				</div>
				<div className="copyright">
					<p>&copy; J.C - 2023</p>
				</div>
			</div>
		</>
	);
}
