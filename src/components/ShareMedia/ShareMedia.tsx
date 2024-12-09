import FaceBookIcon from "../Icons/FaceBookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import ShareIcon from "../Icons/ShareIcon";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import './ShareMedia.scss';

type TShareMedia  = {
    mixUrl?: string;
}


const ShareMedia = ({mixUrl}: TShareMedia) => {
    const mixItemUrl = mixUrl 
    ? mixUrl
    :  'https://www.permy.co.uk/section/live-session'

    const whatsAppText = mixUrl 
    ? encodeURI(`I want to share this music mix with you from ---  https://www.permy.co.uk ${mixItemUrl}`)
    : encodeURI(`I want to share A Live Stream mix from --- https://www.permy.co.uk/live-session`);

    return (
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
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${mixItemUrl}`} target="_blank" rel="noreferrer" >
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
        </div>
    )
}

export default ShareMedia;