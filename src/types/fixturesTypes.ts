export interface IFixtures {
  Count: number;
  ScannedCount: number;
  Items: IFixtures[];
}

export interface IFixtures {
  tournamentId: string;
  homeTeamScore: number
  awayTeamId: string;
  homeTeamId: string;
  fixtureTimeDate: string;
  awayTeamScore: number;
  fixtureID: string;
}

export interface IFixturesProvider {
  fixtures: IFixtures;
  fixturesLoading: boolean;
  tournamentId: string;
}