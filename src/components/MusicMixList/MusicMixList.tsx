import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useContext, useState } from 'react';
import { ContentfulContext } from '../../context/ContentfulProvider/contentfulContext';
import MusicListItem from '../MusicMixItems/MusicMixItems';
import { ModalContext } from '../../context/ModalProvider/modalContext';
import Modal from '../Modal/Modal';
import SoundCloudWidget from '../SoundCloudWidget/SoundCloudWidget';

const MusicMixList = (): JSX.Element => {
	const { setModalToggle, modalToggle } = useContext(ModalContext);
	const [showPlayerIndex, setShowPlayerIndex] = useState<number>(-1);
	const {musicContent, hasError} = useContext(ContentfulContext);


	if (! musicContent) return (<></>);
	if (hasError) return (<></>);

	
	const {
		pageTitle,
		pageDescription,
		mixTapeCollection
	} = musicContent;
	
	const playMix = (playIndex: number) => {
		setShowPlayerIndex(playIndex);
		setModalToggle(true);
	} 

	return (
		<div className='mix-content-container'>
			<h1>{pageTitle}</h1>
			<p dangerouslySetInnerHTML={{__html: pageDescription ? documentToHtmlString(pageDescription) : '<p></p>'}}></p>
			<ul className='mix-list'>
				{
					mixTapeCollection?.map((item, index) => (
						<MusicListItem 
							key={item.mixId}
							mixItem={item} 
							itemIndex={index} 
							playMix={playMix}
						/>
					))
				}
			</ul>
			{modalToggle && showPlayerIndex !== -1
			? (
				<Modal>
					<div>
						<h2>{mixTapeCollection?.[showPlayerIndex].mixTapeTitle}</h2>
						<img src={mixTapeCollection?.[showPlayerIndex].mixTapeImageUrl} alt={mixTapeCollection?.[showPlayerIndex].mixTapeTitle} />
						<SoundCloudWidget trackId={mixTapeCollection[showPlayerIndex].mixId} iframeTitle={mixTapeCollection[showPlayerIndex].mixTapeTitle} />
					</div>
				</Modal>
			) : 
			(<></>)
			}
		</div>
	);
};

export default MusicMixList;
