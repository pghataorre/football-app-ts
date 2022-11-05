import config from '../config/config.mjs';
import { TAddManagerBody } from  '../types/managerType';

const addManagerApi = async (body: TAddManagerBody): Promise<Response> => {
	return await fetch(`${config.apiUrl}/managers/${body.teamId}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(body),
	});
};

export default addManagerApi;
