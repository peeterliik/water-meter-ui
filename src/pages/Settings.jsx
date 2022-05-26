import Header from "../components/header/Header";
import SettingsCard from "../components/cards/SettingsCard";
import { getUser } from "../utils/controllers/endpoints";
import React, { useEffect, useState } from "react";

const pageName = "Settings";

const Settings = () => {
	const [user, setUser] = useState(getUser());
	const [loading, setLoading] = useState(true);

	const getUserSettings = () => {
		setLoading(false);
		getUser()
			.then((data) => {
				setLoading(false);
				setUser(data);
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
			<Header pageName={pageName} address={user.address}></Header>
			<div className="cards">
				<SettingsCard
					headerName={"User settings"}
					name={user.name}
					address={user.address}
				></SettingsCard>
			</div>
		</div>
	);
};
export default Settings;
