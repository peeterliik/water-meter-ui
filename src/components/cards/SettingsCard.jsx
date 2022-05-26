import "./SettingsCard.scss";
import { useFormik } from "formik";
import { putUser } from "../../utils/controllers/endpoints";

function SettingsCard(props) {
	const formik = useFormik({
		initialValues: { name: props.name, address: props.address },
		onSubmit: (value) => {
			putUser({ name: value.name, address: value.address });
		},
	});
	return (
		<div className="setting-item">
			<div className="setting-header">{props.headerName}</div>
			<div className="setting-container">
				<div className="setting-current">
					Name: <strong>{props.name}</strong>
					<form className="setting-form" onSubmit={formik.handleSubmit}>
						<input
							id="name"
							name="name"
							onChange={formik.handleChange}
							value={formik.values.name}
						/>
						<button type="submit">Change</button>
					</form>
					Address: <strong>{props.address}</strong>
					<form className="setting-form" onSubmit={formik.handleSubmit}>
						<input
							id="address"
							name="address"
							onChange={formik.handleChange}
							value={formik.values.address}
						/>
						<button type="submit">Change</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SettingsCard;
