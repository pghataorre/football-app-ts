import getTournamentApi from '../../api/getTournamentsApi';
import { ITournaments } from '../../types/tournamentTypes';

const getTournaments = async (defaultTournament: string): Promise<ITournaments | {}>  => {
	try {
		const response = await getTournamentApi(defaultTournament);

		if (response.ok) {
			return await response.json();
		}

		return {};
	} catch (error) {
		console.log('error ==== ', error);
		return {};
	}
};

export default getTournaments;
