import CardItem from "../components/cards/CardItem.jsx";
import CardItemBig from "../components/cards/CardItemBig.jsx";
import Header from "../components/header/Header";
import "./Dashboard.scss";
import currentReadingIcon from "../assets/icons/current-reading-icon.svg";
import currentBalanceIcon from "../assets/icons/current-balance-icon.svg";
import waterSpentIcon from "../assets/icons/water-spent-icon.svg";
import currentComparedUpIcon from "../assets/icons/current-compared-up-icon.svg";
import currentComparedDownIcon from "../assets/icons/current-compared-down-icon.svg";
import React, { useEffect, useState } from "react";

import {
	getLatest,
	getConsumptionCurrentMonth,
	getConsumptionPreviousMonth,
	getUser,
	getPreviousTwelveMonthsConsumption,
} from "../utils/controllers/endpoints.js";

import {
	timeFormatOptionsFull,
	timeFormatOptionsShort,
	waterPrice,
} from "../utils/constants.js";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const dataMonths = [
	{ name: "Geeksforgeeks", students: 400 },
	{ name: "Technical scripter", students: 700 },
	{ name: "Geek-o-mania", students: 1000 },
];

const pageName = "Dashboard";

const getPreviousMonth = () => {
	const current = new Date().getMonth();
	return months[current - 1];
};

const Dashboard = () => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	const [latestRead, setLatestRead] = useState([]);
	const [latestReadTimeFull, setLatestReadTimeFull] = useState([]);
	const [readTimeShort, setReadTimeShort] = useState([]);
	const [consumptionCurrentMonth, setConsumptionCurrentMonth] = useState([]);
	const [consumptionPreviousMonth, setConsumptionPreviousMonth] = useState([]);
	const [consumptionTwelveMonths, setConsumptionTwelveMonths] = useState([]);

	const currentComparedIcon = () => {
		if (consumptionCurrentMonth > consumptionPreviousMonth) {
			return currentComparedUpIcon;
		} else {
			return currentComparedDownIcon;
		}
	};

	const getLatestReadings = () => {
		setLoading(true);
		getLatest()
			.then((data) => {
				setLoading(false);
				setLatestRead(data.value);
				setLatestReadTimeFull(
					new Date(data.time).toLocaleString("en-GB", timeFormatOptionsFull)
				);
				setReadTimeShort(
					new Date(data.time).toLocaleString("en-GB", timeFormatOptionsShort)
				);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				return null;
			});
		getConsumptionCurrentMonth()
			.then((data) => {
				setLoading(false);
				setConsumptionCurrentMonth(data);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				return null;
			});
		getConsumptionPreviousMonth()
			.then((data) => {
				setLoading(false);
				setConsumptionPreviousMonth(data);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				return null;
			});
	};

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

	const getMonthlyConsumption = () => {
		setLoading(false);
		getPreviousTwelveMonthsConsumption()
			.then((data) => {
				setLoading(false);
				setConsumptionTwelveMonths(data);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				return null;
			});
	};

	useEffect(() => {
		getLatestReadings();
		getUserSettings();
		getMonthlyConsumption();
	}, []);

	const currentReadingData = {
		icon: currentReadingIcon,
		value: latestRead,
		subinfo: latestReadTimeFull,
	};

	const currentBalanceData = {
		icon: currentBalanceIcon,
		value: Math.round(consumptionCurrentMonth * waterPrice * 100) / 100 + "€",
		subinfo: readTimeShort,
	};

	const waterSpentData = {
		icon: waterSpentIcon,
		value: consumptionCurrentMonth * 1000 + " L",
		subinfo: readTimeShort,
	};

	const comparedPreviousData = {
		icon: currentComparedIcon(),
		value:
			Math.round(
				((consumptionCurrentMonth - consumptionPreviousMonth) /
					consumptionCurrentMonth) *
					100
			) + "%",
		subinfo: getPreviousMonth(),
	};

	return (
		<div>
			<Header pageName={pageName} address={user}></Header>
			<div className="cards">
				<CardItem
					headerName={"Current reading"}
					icon={currentReadingData.icon}
					value={currentReadingData.value}
					subinfo={currentReadingData.subinfo}
				></CardItem>

				<CardItem
					headerName={"Current balance"}
					icon={currentBalanceData.icon}
					value={currentBalanceData.value}
					subinfo={currentBalanceData.subinfo}
				></CardItem>

				<CardItemBig
					headerName={"Monthly water consumption"}
					chartData={consumptionTwelveMonths}
				></CardItemBig>

				<CardItem
					headerName={"Water spent this month"}
					icon={waterSpentData.icon}
					value={waterSpentData.value}
					subinfo={waterSpentData.subinfo}
				></CardItem>

				<CardItem
					headerName={"Compared to previous month"}
					icon={comparedPreviousData.icon}
					value={comparedPreviousData.value}
					subinfo={comparedPreviousData.subinfo}
				></CardItem>
			</div>
		</div>
	);
};

export default Dashboard;
