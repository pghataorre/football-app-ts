import './MusicMixItems.scss';
import MixTapeDetails from '../MixTapeDetails/MixTapeDetails';
import MixTapeLogo from '../MixTapeLogo/MixTapeLogo';

type TMusicListItem = {
	mixItem: TMixItem; 
	itemIndex: number;
	playMix: (playIndex: number) => void;
}

type TMixItem = {
    mixId: string;
    mixTapeTitle: string;
    mixTapeImageUrl: string;
}

const MusicListItem = ({mixItem, itemIndex, playMix}: TMusicListItem): JSX.Element => {
	return (
		<li>
			<h2 className="show-mobile">{mixItem.mixTapeTitle}</h2>
			<MixTapeLogo mixItem={mixItem} itemIndex={itemIndex} playMix={playMix} />
			<MixTapeDetails mixItem={mixItem} itemIndex={itemIndex} playMix={playMix}/>
		</li>
	)
}

export default MusicListItem;
