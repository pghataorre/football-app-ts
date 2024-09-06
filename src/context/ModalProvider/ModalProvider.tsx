import { useState } from 'react';
import { ModalContext } from './modalContext';

const ContentfulProvider = ({children}: {children: JSX.Element}): JSX.Element  => {
  const [modalToggle, setModalToggle] = useState<boolean>(false);
  
  return (
    <ModalContext.Provider value={{modalToggle, setModalToggle}}>
      {children}
    </ModalContext.Provider>
  );
};

export default ContentfulProvider;
