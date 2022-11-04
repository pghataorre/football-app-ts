import config from '../config/config.mjs';

const getManagers = async (teamId: string): Promise<Response> => {
	return await fetch(`${config.apiUrl}/managers/${teamId}`);
};

export default getManagers;
