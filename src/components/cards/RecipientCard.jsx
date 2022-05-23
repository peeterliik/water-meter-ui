import "./RecipientCard.scss";
import { useFormik } from "formik";
import { putUser } from "../../utils/controllers/endpoints";

function RecipientCard(props) {
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
				<div className="send-current">
					<strong>Recipient:</strong> {props.email}
				</div>

				<form className="newemail-form" onSubmit={formik.handleSubmit}>
					<input
						id="email"
						name="email"
						type="email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					<button type="submit">Change</button>
				</form>
			</div>
		</div>
	);
}

export default RecipientCard;
