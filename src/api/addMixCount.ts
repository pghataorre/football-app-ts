import config from '../config/config.mjs';
import { IMixCountPostBody } from '../types/mixCountTypes';

const addMixCount = async (body: IMixCountPostBody): Promise<Response> => {
    const response = await fetch(`${config.apiUrl}/mixCount`, {
        method: "POST",
        body: JSON.stringify({
            "mixId": body.mixId,
            "mixTitle": body.mixTitle
        })  
    });
    return response;
}

export default addMixCount;