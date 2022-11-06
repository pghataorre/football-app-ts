import config from '../config/config.mjs';
import { TTournamentBody } from '../types/tournamentTypes.js';


const addTournament = async (body: TTournamentBody): Promise<Response> => {
	return await fetch(`${config.apiUrl}/tournaments`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(body),
	});
};

export default addTournament;
