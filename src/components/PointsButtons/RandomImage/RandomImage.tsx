import { ReactNode } from 'react'
import { generateRandomImageIndex } from './generateRandomImageIndex';
import { IContentEntry } from '../../../types/contentfulTypes';

const RandomImage = ({
	Children,
	contentEntry, 
	showBackImage = true,

}: {
	Children?: ReactNode,
	contentEntry: IContentEntry, 
	showBackImage: boolean
	}
): JSX.Element => {
	let backgroundImageStyle = {};
	if (!contentEntry) return (<></>);

	const { 
		backgroundImagesCollection,
	} = contentEntry;

	if (!contentEntry) return (<></>);

	if(showBackImage) {
		const imageIndex: number = generateRandomImageIndex(backgroundImagesCollection.length);
  	const imagePath: string = backgroundImagesCollection[imageIndex].fields.file.url;
		backgroundImageStyle = { backgroundImage: `url(${imagePath})` } 
		
	}


	return (
		<>
			<div className='back-image-container' style={ showBackImage ? backgroundImageStyle : {} }>
				{Children}
			</div>
		</>
	);
};

export default RandomImage;
