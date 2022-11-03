
import {
  useEffect, useState,
} from 'react';
import { TournamentsContext } from './tournamentContext';
import getTournaments from '../contextApi/getTournament';
import { defaultTournament } from '../../constants/constants';
import { ITournaments } from '../../types/tournamentTypes';


const TournamentsProvider = ({ children }: { children: JSX.Element }): JSX.Element  => {
  const [error, setError] = useState<boolean>(false);
  const [tournamentDataLoaded, setTournamentDataLoaded] = useState<boolean>(false);
  const [tournaments, setTournaments] = useState<ITournaments | {}>({})

  useEffect(() => {
    (async () => {
      const tournamentData = await getTournaments(defaultTournament);
      if (!tournamentData) {
        setError(true);
      } else {
        setTournamentDataLoaded(true);
        setTournaments(tournamentData);
      }
    })()
  }, []);

  const tournamentData: any = {
    tournamentDataLoaded,
    tournaments,
    error
  } 
  
  return (
    <TournamentsContext.Provider value={tournamentData}>
      {children}
    </TournamentsContext.Provider>
  )
}

export default TournamentsProvider;