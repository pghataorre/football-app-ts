import getFixturesApi from '../../api/getFixtures';
import { IFixtures } from '../../types/fixturesTypes';

const getFixtures = async (tournamentId: string): Promise<IFixtures | {}> => {
	try {
		const res = await getFixturesApi(tournamentId);
		if (!res.ok) {
			return {};
		}

		return res.json();
	} catch (error) {
		console.error('error ===== ', error);
		return {};
	}
};

export default getFixtures;
