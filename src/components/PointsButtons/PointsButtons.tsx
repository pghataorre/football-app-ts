import {useState} from 'react';
import addPoints from './addPoints';
import './PointsButtons.scss';
import config from '../../config/config.mjs';

const PointsButtons = ({showButtons, teamId}: {showButtons: boolean, teamId: string}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
      state: string, 
      teamId: string
    ): Promise<void> => {
      event.preventDefault();
      disableButton();
      await addPoints(state, teamId);
  }

  const disableButton = (): void => {
    setIsButtonDisabled(true);

    setTimeout((): void => { setIsButtonDisabled(false) }, config.timingAllocation);
  }

  return (
    <>
    {showButtons ? (
      <div className="score-buttons-container">
        <button disabled={isButtonDisabled} className={`points-button win ${isButtonDisabled ? 'disabled' : ''}`} onClick={ (event) => handleClick(event, 'win', teamId) } >+</button>
        <button disabled={isButtonDisabled} className={`points-button draw ${isButtonDisabled ? 'disabled' : ''}`} onClick={ (event) => handleClick(event,'draw', teamId) }>/</button>
        <button disabled={isButtonDisabled} className={`points-button loss ${isButtonDisabled ? 'disabled' : ''}`} onClick={ (event) => handleClick(event, 'loss', teamId) }>-</button> 
      </div>
      ) : (<></>)
    }
    </>
  )
}

export default PointsButtons;
