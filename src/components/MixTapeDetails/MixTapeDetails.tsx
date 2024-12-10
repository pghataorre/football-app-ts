import './MixTapeDetails.scss'
import PlayIconSecondary from '../Icons/PlayIconSecondary';
import ShareMedia from '../ShareMedia/ShareMedia';

type TMixTapeItem = {
	mixItem: any;
    itemIndex: number;
    playMix: (playIndex: number) => void;
}

const MixTapeDetails = ({mixItem, itemIndex, playMix}: TMixTapeItem): JSX.Element => {
    return(
    <div className="mix-item-details">
         <div>
            <h2 className="show-desktop">{mixItem.mixTapeTitle}</h2>
        </div>
        <div className="social-media-share-container">
            <ShareMedia mixUrl={mixItem.mixUrl}/>
            <button className="play-button-secondary" onClick={() => playMix(itemIndex)}>
                <PlayIconSecondary />
            </button>
        </div>
    </div>
    )
  }
  
  export default MixTapeDetails;
  