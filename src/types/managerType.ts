export interface IManagers {
  Items: IManager[];
  ScannedCount?: number;
  Count?: number;
}

export interface IManager {
  isCurrent: boolean;
  managerName: string;
  ID: string;
  teamId: string;
}

export type TAddManagerBody = Omit<IManager, 'ID'>;
