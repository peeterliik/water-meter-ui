import Header from "../components/header/Header";
import { getUser } from "../utils/controllers/endpoints";
import React, { useEffect, useState } from "react";

const pageName = "Settings";

const Settings = () => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	const getUserSettings = () => {
		setLoading(false);
		getUser()
			.then((data) => {
				setLoading(false);
				setUser(data.address);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				return null;
			});
	};

	useEffect(() => {
		getUserSettings();
	}, []);
	return (
		<div>
			<Header pageName={pageName} address={user}></Header>
		</div>
	);
};
export default Settings;
