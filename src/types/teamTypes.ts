export interface ITeam {
  Count: Number;
  Items: ITeamData[];
  ScannedCount: Number;
}

export type ITeamData = {
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
  teams: ITeam;
  loadedData: boolean;
  error: boolean;
}
