import RandomImage from '../components/PointsButtons/RandomImage/RandomImage';
import BoxedContent from '../components/BoxedContent/BoxedContent';
import { useContext } from 'react';
import { ContentfulContext } from '../context/ContentfulProvider/contentfulContext';
import MusicMixList from '../components/MusicMixList/MusicMixList';
import Modal from '../components/Modal/Modal';
import { ModalContext } from '../context/ModalProvider/modalContext';

 
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
		</>
	);
};

export default Default;
