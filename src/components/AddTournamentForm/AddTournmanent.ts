import { TTournamentBody, ITournaments} from '../../types/tournamentTypes';
import addTournamentApi from '../../api/addTournamentApi';

const addTournament = async (body: TTournamentBody): Promise<ITournaments> => {
  try {
    const res = await addTournamentApi(body);
    if (res.ok) {
      return res.json();
    }

    return {
      Items: []
    }

  } catch(error) {
    console.log('error -------- ', error);
    return {
      Items:[]
    }
  }
}

export default addTournament;
