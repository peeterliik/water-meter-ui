import fetch from "node-fetch";

const url = "http://localhost:3008"; //TO-DO Update when service up

const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const getUser = async () => {
	const response = await fetch(url + "/user");
	const data = await response.json();
	return data;
};

export const putUser = async (payload) => {
	const response = await fetch(url + "/user", {
		method: "PATCH",
		body: JSON.stringify(payload),
		headers: { "Content-Type": "application/json" },
	});
	const data = await response.json();
	return data;
};

export const getConsumptionCurrentMonth = async () => {
	const response = await fetch(url + "/consumption/month");
	const data = await response.json();
	if (data.error) {
		const previousResponse = await getConsumptionPreviousMonth();
		return Math.round(previousResponse * 100) / 100;
	}
	return Math.round(data.value * 100) / 100;
};

export const getConsumptionPreviousMonth = async () => {
	let month = new Date().getMonth();
	let year = new Date().getFullYear();
	if (month === 0) {
		month = 11;
		year = year - 1;
	} else {
		month = month - 1;
	}
	const response = await fetch(
		url + "/consumption/month?month=" + month + "&year=" + year
	);
	const data = await response.json();
	return Math.round(data.value * 100) / 100;
};

export const getConsumptionMonth = async (month, year) => {
	const response = await fetch(
		url + "/consumption/month?month=" + month + "&year=" + year
	);
	const data = await response.json();
	return data;
};

export const getPreviousTwelveMonthsConsumption = async () => {
	let data = [];
	for (let i = 11; i >= 0; i--) {
		let today = new Date();
		today.setMonth(today.getMonth() - i);
		let month = today.getMonth();
		let year = today.getFullYear();
		const monthName = monthNames[month];
		const monthValue = await getConsumptionMonth(month, year);
		data.push({ month: monthName, value: monthValue.value * 1000 });
	}
	return data;
};

export const getLatest = async () => {
	const response = await fetch("http://localhost:3008/readings/latest");
	const data = await response.json();
	return data;
};

export const getReadingCurrentMonth = async () => {
	const response = await fetch(url + "/readingmonth");
	const data = await response.json();
	return data;
};

export const getReadingMonth = async (month, year) => {
	const response = await fetch(
		url + "/readindmonth?month=" + month + "&year=" + year
	);
	const data = await response.json();
	return data;
};

//body = { id?: _id, email: _email, value?: _value, month?: _month }
export const putSendReading = async (payload) => {
	const response = await fetch(url + "/send", {
		method: "PATCH",
		body: JSON.stringify(payload),
		headers: { "Content-Type": "application/json" },
	});
	const data = await response.json();
	return data;
};
