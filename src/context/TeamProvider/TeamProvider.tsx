
import {
  useEffect, useState,
} from 'react';
import { defaultTournament } from '../../constants/constants';
import { TeamsContext } from './teamsContext';
import getTeams from '../contextApi/getTeams';
import { ITeam, ITeamProvider, TeamData} from '../../types/teamTypes';

const TeamProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [teams, setTeams] = useState<ITeam | {}>({});
  const [loadedData, setLoadedData] = useState<boolean>(false);

  useEffect(() => {


    (async () => {
      const teamsData = await getTeams(defaultTournament);
      if (!teamsData) {
        setError(true);
      } else {
        const sortedAtoZ: TeamData[] = teamsData.Items.sort(
          (a: TeamData, b: TeamData) => a.teamName.localeCompare(b.teamName)
        );

        teamsData.Items = sortedAtoZ;

        const sortedByMostPoints = teamsData.Items.sort(
          (a: TeamData, b: TeamData) => b.results[0].points - a.results[0].points
        );

        teamsData.Items = sortedByMostPoints;

        setLoadedData(true);
        setTeams(teamsData);
      }
    })();
  }, []);


  const teamDataContext: ITeamProvider = {
    loadedData,
    error,
    teams,
  }

  return (
    <TeamsContext.Provider value={teamDataContext}>
      {children}
    </TeamsContext.Provider>
  )
}

export default TeamProvider;
