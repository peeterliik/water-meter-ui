import "./CardItem.css";

function CardItem() {
	const currentDate = new Date(2022, 2, 3);

	return (
		<div className="card-item">
			<div>Header</div>
			<div>Container</div>
		</div>
	);
}

export default CardItem;
