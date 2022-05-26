import Header from "../components/header/Header";
import RecipientCard from "../components/cards/RecipientCard";
import SendCard from "../components/cards/SendCard";
import ScheduleCard from "../components/cards/ScheduleCard";
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
	}, []);

	return (
		<div>
			<Header pageName={pageName} address={user.address}></Header>
			<div className="cards">
				<RecipientCard
					headerName={"Recipient E-mail"}
					email={user.recipient}
				></RecipientCard>
				<SendCard headerName={"Send reading"} email={user.recipient}></SendCard>
				<ScheduleCard
					headerName={"Schedule sending"}
					schedule={user.schedule}
				></ScheduleCard>
			</div>
		</div>
	);
};

export default SendMail;
