import '../style/Cars.css';
import { useState } from 'react';
import Card from '../components/Card';
import { carArray } from '../utils.jsx';

export default function Cars() {
	const [change, setChange] = useState(0);

	return (
		<>
			<div className="cars">
				<div className="cars-page">
					<h1 className="title-cars">Cars</h1>
					<div className="green-bar"></div>
				<p>Here, is a list of the most popular MGs :</p>
				</div>
				<div className="cards">
					<Card key={carArray[change].id} car={carArray[change]} />
				</div>
				<div className="buttons">
					<button onClick={() => setChange(change === 0 ? carArray.length - 1 : change - 1)}>Previous</button>
					<button onClick={() => setChange(change === carArray.length - 1 ? 0 : change + 1)}>Next</button>
				</div>
			</div>
		</>
	);
}
