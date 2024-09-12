import { ReactNode, useEffect, useState } from 'react'
import { generateRandomImageIndex } from './generateRandomImageIndex';
import { IContentEntry } from '../../types/contentfulTypes';

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
	const { 
		backgroundImagesCollection,
	} = contentEntry;


	const [backgroundImageStyle, setBackgroundImageStyle] = useState<{backgroundImage: string | undefined}>({ backgroundImage: `url(${backgroundImagesCollection[0].fields.file.url})`});
	const [imageIndex, setImageIndex] = useState<number>();


	useEffect(() => {
		const imageChanger = setInterval(() => {
			setImageIndex(generateRandomImageIndex(backgroundImagesCollection.length));
			setBackgroundImageStyle({ backgroundImage: `url(${imagePath})`});
		}, imageIndex === undefined ? 200 : 10000);	

		const imagePath: string = backgroundImagesCollection[imageIndex || generateRandomImageIndex(backgroundImagesCollection.length)].fields.file.url;
		return () => clearInterval(imageChanger);
	},[imageIndex, backgroundImagesCollection, backgroundImageStyle])

	return (
		<>
		{contentEntry && (
			<div className='back-image-container' style={ showBackImage ? backgroundImageStyle : {} }>
				{Children}
			</div>
		)}
		</>
	);
};

export default RandomImage;
