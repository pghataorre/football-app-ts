import React from 'react';
import { ILiveStreamData } from '../../types/contentfulTypes';

export const StreamStateContext = React.createContext<ILiveStreamData>({} as ILiveStreamData);
