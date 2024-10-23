import './MixTapeLogo.scss';
import PlayIcon from "../Icons/PlayIcon";

type TMusicListItem = {
	mixItem: any; 
	itemIndex: number;
	playMix: (playIndex: number) => void;
}

const MixTapeLogo = ({mixItem, itemIndex, playMix}: TMusicListItem): JSX.Element => {
    return(
        <div className='mix-item-image'>
            <img src={mixItem.mixTapeImageUrl} alt={mixItem.mixTapeTitle} />
            <button type="button" className='play-button' onClick={  () => playMix(itemIndex)  }>
                <span><PlayIcon /></span>
            </button>
        </div>
    )
  }
  
  export default MixTapeLogo;
  