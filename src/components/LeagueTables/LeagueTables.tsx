import React, { useContext } from 'react';
import { TeamsContext } from '../../context/TeamProvider/teamsContext';
import { ITeam, ITeamData } from '../../types/teamTypes';
// import PointsButtons from '../PointsButtons/PointsButtons';
import './LeagueTables.scss';

const LeagueTables = ({showButtons} :{showButtons: boolean}): JSX.Element => {
  const {teams, error, loadedData } = useContext(TeamsContext);
  if(!teams) return (<></>) 
  return (
    <div className="league-table-container">
      {error 
        ? (<><p>An error has occurred please try again later</p></>)
        : <LeagueTableGrid 
            teams={teams}
            showButtons={showButtons}
            loadedData={loadedData}
        />
      }
    </div>
  );
}

const LeagueTableGrid = ({teams, showButtons, loadedData}: {teams: ITeam, showButtons: boolean, loadedData: boolean})  => {  
  if (!loadedData) return (<p>.... Loading</p>);
  const LeagueTableRow = teams.Items.map((teamItem: ITeamData): JSX.Element => {
    const keyValue = showButtons ? `team-list-${teamItem.ID}` : `team-points-list-${teamItem.ID}`;
    return (
      <tr key={keyValue} className='teams-row'>
        <td className="team-shield">
          <img src={`/images/${teamItem.logo}`} alt="team shields"/>
        </td>
        <td className="team-name">
          <div>{teamItem.teamName}</div> 
          {/* { showButtons && (<PointsButtons 
            showButtons={showButtons} 
            teamId={team.ID}
          />)} */}
        </td>
        <td className="show-desktop">{teamItem.results[0].won}</td>
        <td className="show-desktop">{teamItem.results[0].draw}</td>
        <td className="show-desktop">{teamItem.results[0].lost}</td>
        <td className="show-desktop">{teamItem.results[0].played}</td>
        <td className="points">{teamItem.results[0].points}</td>
      </tr>
    )
  });

  return (
    <table className="league-table">
      <thead className='teams-row'>
        <tr>
          <th className="team-shield">Teams</th>
          <th></th>
          <th className="show-desktop">W</th>
          <th className="show-desktop">D</th>
          <th className="show-desktop">L</th>
          <th className="show-desktop">Pld</th>
          <th className="points">Pts</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { LeagueTableRow }
      </tbody>
    </table>
  );

}

export default LeagueTables;
