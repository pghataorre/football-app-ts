import getManagersApi from '../../api/getManagersApi';
import { IManagers } from '../../types/managerType';
const getManagers = async (teamId: string): Promise<IManagers> => {
	try {
		const response = await getManagersApi(teamId);
		if (response.ok) {
			const results = await response.json();
			return results;
		}

		return {Items: []};
	} catch (error) {
		console.log('error ==== ', error);
		return {Items: []};
	}
};

export default getManagers;
