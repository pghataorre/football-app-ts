export interface ITournaments {
  Count?: number;
  ScannedCount?: number;
  Items: ITournament[];
}

export interface ITournament {
  ID: string;
  tournamentName: string;
}

export type TTournamentBody = Omit<ITournament, 'ID'>;
