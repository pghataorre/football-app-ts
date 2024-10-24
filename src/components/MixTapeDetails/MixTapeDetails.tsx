import './MixTapeDetails.scss'
import ShareIcon from "../Icons/ShareIcon";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import FaceBookIcon from '../Icons/FaceBookIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import PlayIconSecondary from '../Icons/PlayIconSecondary';

type TMixTapeItem = {
	mixItem: any;
    itemIndex: number;
    playMix: (playIndex: number) => void;
}

const MixTapeDetails = ({mixItem, itemIndex, playMix}: TMixTapeItem): JSX.Element => {
    const whatsAppText = encodeURI(`I want to share this music mix with you from ---  https://www.permy.co.uk ${mixItem.mixUrl}`);

    return(
    <div className="mix-item-details">
         <div>
            <h2 className="show-desktop">{mixItem.mixTapeTitle}</h2>
        </div>
        <div className="social-media-share-container">
            <button className="share-button">
                <ShareIcon />
                <ul className="social-media-list">
                    <li>
                        <a href={`https://wa.me/?text=${whatsAppText}`} target="_blank" rel="noreferrer">
                            <WhatsAppIcon />
                        </a>
                    </li>
                    <li>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${mixItem.mixUrl}`} target="_blank" rel="noreferrer" >
                            <FaceBookIcon />
                        </a>
                    </li>
                    <li>
                        <a href="instagram://user?username=permjitghataorre" target="_blank" rel="noreferrer" >
                            <InstagramIcon />
                        </a>
                    </li>
                </ul>
            </button>
            <button className="play-button-secondary" onClick={() => playMix(itemIndex)}>
                <PlayIconSecondary />
            </button>
        </div>

    </div>
    )
  }
  
  export default MixTapeDetails;
  