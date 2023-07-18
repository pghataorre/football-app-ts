import { MouseEvent } from 'react'
import PlayIcon from '../Icons/PlayIcon';


const MusicListItem = ({mixItem, itemKey}: {mixItem: any, itemKey:string}): JSX.Element => {

  const playMix = async () => {
    console.log('a TEST');
  } 

	return (
		<li key={itemKey}>
			<div className='mix-item-image'>
				<img src={mixItem.fields.mixtapeMediaItems[0].fields.file.url} alt={mixItem.fields.mixTapeTitle} />
          <button type="button" className='play-button' onClick={ (event: MouseEvent) => { playMix() } }>
            <PlayIcon />
          </button>
			</div>
			<div>
        <h2>{mixItem.fields.mixTapeTitle}</h2>
			</div>
		</li>
	)
}

export default MusicListItem;
