import "./CardItem.scss";

function CardItem(props) {
	return (
		<div className="card-item">
			<div className="card-header">{props.headerName}</div>
			<div className="card-container">
			<div className="card-icon">
				<img className="card-icon-icon" src={props.icon} alt="iconprop"></img>
				</div>
				<div className="card-value">{props.value}</div>
				<div className="card-subinfo">{props.subinfo}</div>
				</div>
		</div>
	);
}

export default CardItem;
