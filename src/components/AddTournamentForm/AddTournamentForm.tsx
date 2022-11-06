import { useContext, useState } from 'react';
import { TeamsContext } from '../../context/TeamProvider/teamsContext';
import ApiMessage from '../ApiMessages/ApiMessages';
import addTournament from './AddTournmanent';

const TournamentForm = () => {
  const [hasPosted, setHasPosted] = useState<boolean>(false);
  const [hasPostError, setHasPostError] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tournamentName = (event.currentTarget.elements.namedItem('tournament-name') as HTMLSelectElement).value;

    const response = await addTournament({tournamentName});
    if (response.Items.length > 0) {
        setHasPosted(true);
        setHasPostError(false);
        return;
      }

      setHasPosted(false);
      setHasPostError(true);
      return;
  }

  return (
    <div className="manager-form">
      <ApiMessage showMessage={hasPosted} cssClass='success' message='Manager has been added.'/>
      <ApiMessage showMessage={hasPostError} cssClass='error' message='An error has occurred'/>
      <form onSubmit={(event) => handleSubmit(event) }>
        <label htmlFor="tournament-name">Name of Tournament </label>
          <input type="text" id="tournament-name" name="tournament-name" placeholder="Tournament name" />
        <label htmlFor="submit-tournament-form">
          <button type="submit" id="submit-tournament-form">Add Tournament</button>
        </label>
      </form>
    </div>
  )
}

const AddTournamentForm = () => {
  const {loadedData} = useContext(TeamsContext);
  return loadedData ? (<TournamentForm />) : (<><p>Loading ...</p></>)
}

export default AddTournamentForm;
