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
	const [backgroundImageStyle, setBackgroundImageStyle] = useState<{backgroundImage: string | undefined}>();
	const [imageIndex, setImageIndex] = useState<number>(0);

	const { 
		backgroundImagesCollection,
	} = contentEntry;

	useEffect(() => {

		const defaultImageIndex = generateRandomImageIndex(backgroundImagesCollection.length)
		setBackgroundImageStyle({ backgroundImage: `url(${backgroundImagesCollection[defaultImageIndex].fields.file.url})`})


		const imageChanger = setInterval(() => {
			setImageIndex(generateRandomImageIndex(backgroundImagesCollection.length));
			setBackgroundImageStyle({ backgroundImage: `url(${imagePath})`});
		}, 10000);	

		const imagePath: string = backgroundImagesCollection[imageIndex].fields.file.url;

		return () => clearInterval(imageChanger);
	},[imageIndex, backgroundImagesCollection])

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
