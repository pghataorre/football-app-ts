import config from '../config/config.mjs';

const getTournamentsApi = async (defaultTournament: string): Promise<Response> => 
	await fetch(`${config.apiUrl}/tournaments`);

export default getTournamentsApi;
