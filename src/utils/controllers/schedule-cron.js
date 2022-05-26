const CronJob = require("cron").CronJob;
const { getUser, putSendReading } = require("./endpoints");
const { monthNames } = require("../constants");

const scheduleSendEmail = async () => {
	const user = await getUser();
	const sendDay = user.schedule;
	const currentDate = new Date();
	const currentMonth = monthNames[currentDate.getMonth()];
	if (sendDay === currentDate.getDate()) {
		putSendReading({
			email: user.email,
			month: currentMonth,
			year: currentDate.getFullYear(),
		});
	}
};

const scheduleSend = new CronJob("0 9 * * *", scheduleSendEmail);

module.exports = scheduleSend;
