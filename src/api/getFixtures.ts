import config from '../config/config.mjs';

const getFixturesApi = async (tournamentId: string):  Promise<Response> => await fetch(`${config.apiUrl}/tournaments/${tournamentId}/fixtures`);

export default getFixturesApi;
