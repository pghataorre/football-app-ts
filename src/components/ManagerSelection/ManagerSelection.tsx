import React, { useContext, useState } from 'react';
import { TeamsContext } from '../../context/TeamProvider/teamsContext';
import ManagerNamesList from '../ManagerNamesList/ManagerNamesList';
import TeamsList from '../TeamsList/TeamsList'; 
import getManagersApi from './getMangers';
import { IManagers } from '../../types/managerType';

const ManagerSelection = (): JSX.Element => {
  const [managerData, setManagerData] = useState<IManagers>({} as IManagers);
  const {teams} = useContext(TeamsContext);
  const handleSelect = async (event: React.ChangeEvent<HTMLSelectElement>)  => {
    const result = await getManagersApi(event.currentTarget.value);

    if (Object.keys(result).length > 0) {
      setManagerData(result);
    };
  }

  return ( 
    <div className="manager-listing">
      <TeamsList 
        showAsSelect={true}
        handleOnChange={handleSelect}
        teams={teams}
      />
      <div className="manager-names">
        { Object.keys(managerData).length > 0 ? (<ManagerNamesList managerData={managerData}/>) : (<></>) }
      </div>
    </div>
  )
}

export default ManagerSelection;
