export const getVideoID = (fullUrl) => {
	let matches;
	if (typeof fullUrl == 'string') {
		if (matches = fullUrl.match(/.*v=(.+)/))
			return (matches[1])
	}
	 return null;
}

export const getDateFromString = (dateString) => {
	const date = new Date(dateString);
	return {
		month: date.toLocaleString('default', { month: 'short' }),
		day: date.getUTCDate(),
		year: date.getFullYear()
	}
}