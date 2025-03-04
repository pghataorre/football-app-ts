import './MixTapeDetails.scss'
import PlayIconSecondary from '../Icons/PlayIconSecondary';
import ShareMedia from '../ShareMedia/ShareMedia';
import { IMixItem } from '../../types/contentfulTypes';
import { IMixCountPostBody } from '../../types/mixCountTypes';

type TMixTapeItem = {
	mixItem: IMixItem;
    itemIndex: number;
    playMix: (playIndex: number) => void;
    sendMixCount: (body: IMixCountPostBody) => void;
}

const MixTapeDetails = ({mixItem, itemIndex, playMix, sendMixCount}: TMixTapeItem): JSX.Element => {
    const handleClick = async () => {
        playMix(itemIndex);
        await sendMixCount({mixId: mixItem.mixId, mixTitle: mixItem.mixTapeTitle})
     }


    return(
        <div className="mix-item-details">
            <div>
                <h2 className="show-desktop">{mixItem.mixTapeTitle}</h2>
            </div>
            <div className="social-media-share-container">
                <ShareMedia mixUrl={mixItem.mixUrl}/>
                <button className="play-button-secondary" data-testid="play-button" onClick={() => handleClick()}>
                    <PlayIconSecondary />
                </button>
            </div>
        </div>
    )
  }
  
  export default MixTapeDetails;
  