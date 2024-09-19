import PlayIcon from '../Icons/PlayIcon';

type TMusicListItem = {
	mixItem: any; 
	itemIndex: number;
	playMix: (playIndex: number) => void;
}

const MusicListItem = ({mixItem, itemIndex, playMix}: TMusicListItem): JSX.Element => {
	return (
		<li>
			<h2>{mixItem.mixTapeTitle}</h2> 
			<div className='mix-item-image'>
				<img src={mixItem.mixTapeImageUrl} alt={mixItem.mixTapeTitle} />
				<button type="button" className='play-button' onClick={  () => playMix(itemIndex)  }>
					<PlayIcon />
				</button>
			</div>
		</li>
	)
}

export default MusicListItem;
