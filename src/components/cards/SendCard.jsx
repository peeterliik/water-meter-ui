import "./SendCard.scss";
import { useFormik } from "formik";
import { putUser } from "../../utils/controllers/endpoints";

function SendCard(props) {
	const formik = useFormik({
		initialValues: { email: props.email },
		onSubmit: (value) => {
			putUser({ recipient: value.email });
		},
	});
	return (
		<div className="send-item">
			<div className="send-header">{props.headerName}</div>
			<div className="send-container">
				<div className="send-current">Current email: {props.email}</div>

				<form className="newemail-form" onSubmit={formik.handleSubmit}>
					<label htmlFor="email">New Email: </label>
					<div className="input">
						<input
							id="email"
							name="email"
							type="email"
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
					</div>
					<button type="submit">Save</button>
				</form>
			</div>
		</div>
	);
}

export default SendCard;
