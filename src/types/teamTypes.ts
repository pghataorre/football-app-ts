export interface ITeam {
    teams: {
      Count: Number;
      Item: TeamData[];
      ScannedCount: Number;

    };
    defaultTournament?: string;
    error: boolean;
    dataLoaded: boolean;
    tournamentDataLoaded: boolean;
}

export type TeamData = {
  tournamentID: string;
  teamName: string;
  logo: string;
  ID: string;
  results: TeamResults[];
}

export type TeamResults = {
  ID: string;
  against: number;
  draw: number;
  lost: number;
  for: number;
  goaldiff: number;
  played: number;
  teamId: string;
  won: number;
  points: number;
}


export interface ITeamProvider {
  teams: ITeam | object;
  loadedData: boolean,
  error: boolean,
}
