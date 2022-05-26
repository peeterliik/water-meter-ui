import "./ScheduleCard.scss";
import { useFormik } from "formik";
import { putUser } from "../../utils/controllers/endpoints";

function ScheduleCard(props) {
	const formik = useFormik({
		initialValues: { schedule: "1" },
		onSubmit: (value) => {
			putUser({ schedule: value.schedule });
		},
	});
	return (
		<div className="send-item">
			<div className="send-header">{props.headerName}</div>
			<div className="schedule-container">
				<div className="schedule-current">
					Next sending on: day <strong>{props.schedule}</strong> of the month
				</div>

				<form className="schedule-form" onSubmit={formik.handleSubmit}>
					<label for="schedule">Day:</label>
					<select
						id="schedule"
						name="schedule"
						onChange={formik.handleChange}
						value={formik.values.schedule}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
						<option value="22">22</option>
						<option value="23">23</option>
						<option value="24">24</option>
						<option value="25">25</option>
						<option value="26">26</option>
						<option value="27">27</option>
						<option value="28">28</option>
						<option value="29">29</option>
						<option value="30">30</option>
						<option value="31">31</option>
					</select>
					<button type="submit">Schedule</button>
				</form>
			</div>
		</div>
	);
}

export default ScheduleCard;
