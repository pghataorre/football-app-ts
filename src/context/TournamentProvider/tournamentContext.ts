import React from 'react';
import { ITournaments } from '../../types/tournamentTypes';

export const TournamentsContext = React.createContext<ITournaments | Object>({});