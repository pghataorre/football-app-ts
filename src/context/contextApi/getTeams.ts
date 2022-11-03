import getTeamsApi from '../../api/getTeamsApi';

const getTeams = async (tournamentId: string) => {
	try {
		const res = await getTeamsApi(tournamentId);
		if (!res.ok) {
			return false;
		}

		return res.json();
	} catch (error) {
		console.error('error ===== ', error);
		return false;
	}
};

export default getTeams;
