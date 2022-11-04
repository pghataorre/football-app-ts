import config from '../config/config.mjs';

const pointsApi = async (action: string, teamId: string): Promise<Response> => {
	return await fetch(`${config.apiUrl}/points`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify({ action, teamId }),
	});
};

export default pointsApi;
