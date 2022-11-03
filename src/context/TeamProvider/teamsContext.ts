import React from 'react';
import { ITeamProvider} from '../../types/teamTypes';

export const TeamsContext = React.createContext<ITeamProvider>({} as ITeamProvider);
