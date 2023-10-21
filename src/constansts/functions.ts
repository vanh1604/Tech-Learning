export const isNumber = (str: string): boolean => {
	return !isNaN(parseFloat(str)) && isFinite(Number(str));
};

export const timeConvert = (time: string) => {
	//check if validate
	const isValidate = time.includes(":") && isNumber(time.replace(":", ""));
	if (isValidate) {
		const currentDate = new Date();

		// Extract the hours and minutes from the time string
		const [hours, minutes] = time.split(":").map(Number);

		// Set the hours and minutes of the Date object
		currentDate.setHours(hours);
		currentDate.setMinutes(minutes);

		return currentDate;
	}
	return;
};

export const timeFormat = (time: Date) => {
	const format = (number: number) => {
		return `${number > 10 ? number : `0${number}`}`;
	};
	return `${format(time.getHours())}:${format(time.getMinutes())}`;
};

export const getStringBetween = (str: string, char1: string, char2: string) => {
	if (!str.includes(char1)) {
		return str;
	}
	if (!str.includes(char2)) {
		return str.split(char1)[1];
	}
	return str.split(char1)[1].split(char2)[0];
};

export const formatYoutubeLink = (ytLink: string) => {
	return getStringBetween(ytLink, "=", "&");
};
