import fetch from "node-fetch";

const url = "http://localhost:3008"; //TO-DO Update when service up

export const getConsumptionCurrentMonth = async () => {
	const response = await fetch(url + "/consumption/month");
	const data = await response.text();
	return data;
};

export const getConsumptionMonth = async (month, year) => {
	const response = await fetch(
		url + "consumption/month?month=" + month + "&year=" + year
	);
	const data = await response.text();
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
