import PlayIcon from '../Icons/PlayIcon';
import SoundCloudWidget from '../SoundCloudWidget/SoundCloudWidget';

type TMusicListItem = {
	mixItem: any; 
	itemIndex: number;
	setShowPlayerIndex: (playIndex: number) => void;
	showPlayerIndex: number;
}
const MusicListItem = ({mixItem, itemIndex, setShowPlayerIndex, showPlayerIndex}: TMusicListItem): JSX.Element => {

	const playMix = (playIndex: number) => {
		setShowPlayerIndex(playIndex);
	} 

	return (
		<li>
			<div className='mix-item-image'>
				<img src={mixItem.fields.mixtapeMediaItems[0].fields.file.url} alt={mixItem.fields.mixTapeTitle} />
				<button type="button" className='play-button' onClick={ () => { playMix(itemIndex) } }>
					<PlayIcon />
				</button>
			</div>
			<div>
				<h2>{mixItem.fields.mixTapeTitle}</h2>
				{ Number(showPlayerIndex) === Number(itemIndex) 
				? (<SoundCloudWidget trackId={mixItem.fields.mixId} iframeTitle={mixItem.fields.mixTapeTitle} />) : (<></>)
				}
			</div>
		</li>
	)
}

export default MusicListItem;
