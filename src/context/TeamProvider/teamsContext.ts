import React from 'react';
import { ITeam } from '../../types/teamTypes';

export const TeamsContext = React.createContext<ITeam | Object>({});