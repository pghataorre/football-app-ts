import { IManager, IManagers } from  '../../types/managerType';

const ManagerNamesList = ({managerData}: {managerData: IManagers}): JSX.Element | null => {
  return (
    <>
      <h3>Managers</h3>
      <ul className="generic-app-list">
      { managerData.Items.length === 0 
        ? (<h3>No Managers listed for this Team</h3>)
        : managerData.Items.map((manager: IManager) => (
          <li className={manager.isCurrent ? 'currentManager': ''} key={manager.ID}>
            {manager.managerName}
        </li>))
      }
      </ul>
    </>
  );
}

export default ManagerNamesList;
