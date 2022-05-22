import Header from "../components/header/Header";
import SendCard from "../components/cards/SendCard";
import React, { useEffect, useState } from "react";
import { getUser } from "../utils/controllers/endpoints";

const pageName = "Send Readings";

const SendMail = () => {
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
		console.log(user.recipient);
	}, []);

	return (
		<div>
			<Header pageName={pageName} address={user.address}></Header>
			<div className="cards">
				<SendCard
					headerName={"Recipient E-mail"}
					email={user.recipient}
				></SendCard>
			</div>
		</div>
	);
};

export default SendMail;
