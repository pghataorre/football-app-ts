import RandomImage from '../components/RandomImage/RandomImage';
import BoxedContent from '../components/BoxedContent/BoxedContent';
import { useContext } from 'react';
import { ContentfulContext } from '../context/ContentfulProvider/contentfulContext';
import MusicMixList from '../components/MusicMixList/MusicMixList';
import Modal from '../components/Modal/Modal';
import { ModalContext } from '../context/ModalProvider/modalContext';
import SocialMediaList from '../components/SocialMediaList/SocialMediaList';
import GetInTouch from './GetInTouch';

 
const Default = (): JSX.Element => {
	const {content, hasError} = useContext(ContentfulContext);
	const modalContext = useContext(ModalContext);

	if (hasError) return (<></>);
	if (!content) return (<></>)

	return (
		<>
			<div className='default-page' id="default-page">
				{modalContext.modalToggle && (<Modal />)}
				{ content && (
					<>
						<RandomImage contentEntry={content} showBackImage />
						<BoxedContent contentEntry={content}/>
						<SocialMediaList />
						<h2>{content.pageTitle}</h2>
					</>
				)}
			</div>
			<div className='music-page' id="mixes-page">
				{ content && (
					<>
						<MusicMixList />
					</>
				)}
			</div>
			<div className='contact-page' id="contact-page">
				{ content && (
					<>
						<GetInTouch />
					</>
				)}
			</div>

		</>
	);
};

export default Default;
