import React, { Dispatch } from 'react';

type TModalContext =  {
    modalToggle: boolean;
    setModalToggle: Dispatch <boolean>
}

export const ModalContext = React.createContext<TModalContext>({} as TModalContext);
