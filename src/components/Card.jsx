import PropTypes from 'prop-types';
import '../style/Card.css';
export default function Card({ car }) {
	return (
		<div className="card">
			<div className="card-page">
				<h2 className="title-card">{car.name}</h2>
				<ul className="caracteristics">
					<img src={car.img} alt={car.name} />
					<li>Production years: {car.production}</li>
					<li>Body type: {car.bodyType}</li>
					<li>Engine type: {car.engineType}</li>
					<li>Engine: {car.engine}</li>
					<li>BHP: {car.bhp}</li>
					<li>Gearbox: {car.gearbox}</li>
					<li>Weight: {car.weight}</li>
					<li>Max speed: {car.maxSpeed}</li>
					<li></li>
				</ul>
			</div>
		</div>
	);
}

Card.propTypes = {
	car: PropTypes.shape({
		name: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		production: PropTypes.string.isRequired,
		bodyType: PropTypes.string.isRequired,
		engineType: PropTypes.string.isRequired,
		engine: PropTypes.string.isRequired,
		bhp: PropTypes.string.isRequired,
		weight: PropTypes.string.isRequired,
		gearbox: PropTypes.string.isRequired,
		gearboxBrand: PropTypes.string.isRequired,
		maxSpeed: PropTypes.string.isRequired,
	}),
};
