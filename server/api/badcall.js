export default defineEventHandler(async () => {
	try {
		const response = await fetch(
			`https://newsapi.org/v2/sources?apiKey`
		);
		const data = await response.json();
		if (!response.ok) {
			return { error: response.statusText, status: response.status };
		}
		return { data, status: response.status };
	} catch (error) {
		return { error: error.message, status: 500 };
	}
});
