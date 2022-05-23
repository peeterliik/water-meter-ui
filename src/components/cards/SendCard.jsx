import "./SendCard.scss";
import { useFormik } from "formik";
import { putSendReading } from "../../utils/controllers/endpoints";

function SendCard(props) {
	const formik = useFormik({
		initialValues: { year: "2022", month: "Jun" },
		onSubmit: (value) => {
			putSendReading({
				email: props.email,
				month: value.month,
				year: value.year,
			});
			window.confirm(
				"Readings sent for " + value.month + "/" + value.year + "."
			);
		},
	});
	return (
		<div className="send-item">
			<div className="send-header">{props.headerName}</div>
			<div className="send-container">
				<form className="select-year-month" onSubmit={formik.handleSubmit}>
					<label for="year">Year:</label>
					<select
						id="year"
						name="year"
						onChange={formik.handleChange}
						value={formik.values.year}
					>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
					<p></p>
					<label for="month">Month:</label>
					<select
						id="month"
						name="month"
						onChange={formik.handleChange}
						value={formik.values.month}
					>
						<option value="Jan">January</option>
						<option value="Feb">February</option>
						<option value="Mar">March</option>
						<option value="Apr">April</option>
						<option value="May">May</option>
						<option value="Jun">June</option>
						<option value="Jul">July</option>
						<option value="Aug">August</option>
						<option value="Sep">September</option>
						<option value="Oct">October</option>
						<option value="Nov">November</option>
						<option value="Dec">December</option>
					</select>
					<p></p>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
}

export default SendCard;
