import React from 'react';
import { IContext } from '../../types/contentfulTypes';

export const ContentfulContext = React.createContext<IContext>({} as IContext);
