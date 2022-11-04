import pointsApi from '../../api/pointsApi';

const addPoints = async (action: string, teamId: string): Promise<Response | object> => {
	try {
		const response = await pointsApi(action, teamId);
		if (response.ok) {
			return await response.json();
		}

		return {};
	} catch (error) {
		console.log('error ==== ', error);
		return {};
	}
};

export default addPoints;
