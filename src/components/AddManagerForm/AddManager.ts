import { TAddManagerBody, IManagers } from '../../types/managerType';
import addManagerApi from '../../api/addManagerApi';

const AddManager = async (body: TAddManagerBody): Promise<IManagers> => {
    try {
      const res = await addManagerApi(body);
      if (res.ok) {
        return res.json();
      }

      return {
        Items: []
      }

    } catch(error) {
      console.log('----------- Error----------', error);
      return  {
        Items: []
      }
    }
}

export default AddManager;