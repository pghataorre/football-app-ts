import React, { useContext, useState } from 'react';
import { TeamsContext } from '../../context/TeamProvider/teamsContext';
import addManager from './AddManager';
import { ITeam } from '../../types/teamTypes';
import ApiMessage from '../ApiMessages/ApiMessages';
import TeamsList from '../TeamsList/TeamsList';


const ManagerForm = ({teams}: {teams: ITeam}) => {
  const [isCurrentManagerSelected, setIsCurrentManagerSelected] = useState<boolean>(false);
  const [hasPosted, setHasPosted] = useState<boolean>(false);
  const [hasPostError, setHasPostError] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const managerName = (event.currentTarget.elements.namedItem('manager-name') as HTMLInputElement).value;
    const teamId = (event.currentTarget.elements.namedItem('team-list') as HTMLSelectElement).value;
    const body = {
      managerName,
      teamId,
      isCurrent: isCurrentManagerSelected
    }
    
    const result = await addManager(body);

    if (result.Items.length > 0) {
      setHasPosted(true);
      setHasPostError(false);
      return;
    }

    setHasPosted(false);
    setHasPostError(true);
    return;
  }

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsCurrentManagerSelected(event.currentTarget.checked ? true : false);
  }

  return (
    <div className="manager-form">
      <ApiMessage showMessage={hasPosted} cssClass='success' message='Manager has been added.'/>
      <ApiMessage showMessage={hasPostError} cssClass='error' message='An error has occurred'/>
      <form onSubmit={(event) => handleSubmit(event) }>
        <TeamsList teams={teams} 
          showAsSelect={true}
        />
        <label htmlFor="manager-name">Name of the football manager </label>
        <input  type="text" id="manager-name" name="manager-name" placeholder="Manager name" />

        <label htmlFor="current-manager-yes">
          <input type="checkbox" id="current-manager" onChange={(event) => handleCheckBoxChange(event)} name="current-manager"/>
          <span className="radio-text">Yes - this is the current manager</span> 
        </label>
        <button type="submit" id="submit-manager-form">Add Manager</button>
      </form>
    </div>
  )
}

const AddManagerForm = () => {
  const {teams, loadedData} = useContext(TeamsContext);
  return loadedData ? (<ManagerForm teams={teams}/>) : (<><p>Loading ...</p></>)
}

export default AddManagerForm;
