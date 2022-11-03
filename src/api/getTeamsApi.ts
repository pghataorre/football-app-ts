import config from '../config/config.mjs';

const getTeamsApi = async (tournamentId: string) : Promise<Response>  => 
	await fetch(`${config.apiUrl}/tournaments/${tournamentId}/teams`);

export default getTeamsApi;
