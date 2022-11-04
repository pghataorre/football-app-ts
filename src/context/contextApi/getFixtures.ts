import getFixturesApi from '../../api/getFixturesApi';
import { IFixtures } from '../../types/fixturesTypes';

const getFixtures = async (tournamentId: string): Promise<IFixtures | {}> => {
	try {
		const res = await getFixturesApi(tournamentId);
		if (!res.ok) {
			return {Items: []};
		}

		return res.json();
	} catch (error) {
		console.error('error ===== ', error);
		return {Items: []};
	}
};

export default getFixtures;
