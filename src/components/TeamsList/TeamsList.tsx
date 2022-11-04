import { ITeam, ITeamData } from '../../types/teamTypes';

const TeamsList = ({teams, showAsSelect, handleOnChange}: {
    teams: ITeam,
    showAsSelect: boolean, 
    handleOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => {};
  }) : JSX.Element => {
  return (
    <div className='team-list'>
      {showAsSelect 
      ? 
        <TeamSelectList
          teams={teams}
          handleOnChange={handleOnChange}
        /> 
      : <TeamsListing teams={teams}/>}
    </div>
  )
}

const TeamsListing = ({teams}: {teams: ITeam}) => (
  <ul>
  { 
    teams.Items.map((teamItem: ITeamData): JSX.Element => {
    return (<li key={`team-item-${teamItem.ID}`}>{ teamItem.teamName }</li>)
    })}
  </ul>
)

const TeamSelectList = ({handleOnChange, teams}: {
  handleOnChange?: (event: React.ChangeEvent<HTMLSelectElement>)=> {}, 
  teams: ITeam,
}): JSX.Element => {
  const options = teams.Items.map((teamItem: ITeamData) => {
    return (<option value={teamItem.ID} key={`team-option-${teamItem.ID}`}>{ teamItem.teamName }</option>)
  });

  return (
    <div className='team-select-list'>
      <label htmlFor="team-list">Please select a team</label>
      <select name="team-list" onChange={!handleOnChange ? undefined : (event) => handleOnChange(event)}>
        <option value="-1">Please select a Team</option>
        { options }
      </select>
    </div>
  )
}

export default TeamsList;
