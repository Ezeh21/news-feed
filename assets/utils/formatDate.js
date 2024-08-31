export const formatDate = (iso) => {
	const date = new Date(iso);
	const options = { year: "numeric", month: "long", day: "numeric" };
	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
	return formattedDate;
};
