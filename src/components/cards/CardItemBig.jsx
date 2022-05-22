import "./CardItemBig.scss";

import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

function CardItemBig(props) {
	return (
		<div className="big-card-item">
			<div className="big-card-header">{props.headerName}</div>
			<div className="big-card-container">
				<BarChart width={800} height={500} data={props.chartData}>
					<Bar dataKey="value" fill="CornflowerBlue" />
					<CartesianGrid stroke="#ccc" />
					<XAxis dataKey="month" />
					<YAxis />
				</BarChart>
			</div>
		</div>
	);
}

export default CardItemBig;
