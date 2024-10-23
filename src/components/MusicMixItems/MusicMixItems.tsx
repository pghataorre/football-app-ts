import './MusicMixItems.scss';
import MixTapeDetails from '../MixTapeDetails/MixTapeDetails';
import MixTapeLogo from '../MixTapeLogo/MixTapeLogo';

type TMusicListItem = {
	mixItem: any; 
	itemIndex: number;
	playMix: (playIndex: number) => void;
}

const MusicListItem = ({mixItem, itemIndex, playMix}: TMusicListItem): JSX.Element => {
	return (
		<li>
			<h2 className="show-mobile">{mixItem.mixTapeTitle}</h2>
			<MixTapeLogo mixItem={mixItem} itemIndex={itemIndex} playMix={playMix} />
			<MixTapeDetails mixItem={mixItem} />
		</li>
	)
}

export default MusicListItem;
