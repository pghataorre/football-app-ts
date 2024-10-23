import './MixTapeDetails.scss'
import ShareIcon from "../Icons/ShareIcon";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import FaceBookIcon from '../Icons/FaceBookIcon';
// import InstagramIcon from '../Icons/InstagramIcon';

type TMixTapeItem = {
	mixItem: any; 
}

const MixTapeDetails = ({mixItem}: TMixTapeItem): JSX.Element => {
    const whatsAppText = encodeURI(`I want to share this music mix with you from ---  https://www.permy.co.uk ${mixItem.mixUrl}`);

    return(
    <div className="mix-item-details">
         <div>
            <h2 className="show-desktop">{mixItem.mixTapeTitle}</h2>
        </div>
        <div className="social-media-share-container">
            <button className='share-button'>
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
                </ul>
            </button>
        </div>

    </div>
    )
  }
  
  export default MixTapeDetails;
  