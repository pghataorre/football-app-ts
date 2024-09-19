import { ReactNode, useEffect, useState } from 'react'
import { generateRandomImageIndex } from './generateRandomImageIndex';
import { IContentEntry } from '../../types/contentfulTypes';

type TBackgroundImage = {
	backgroundImage: string | undefined;
	backgroundSize?: string;
}

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

	const [backgroundImageStyle, setBackgroundImageStyle] = useState<TBackgroundImage>();
	const [imageIndex, setImageIndex] = useState<number>();

	useEffect(() => {
		const imageChanger = setInterval(() => {
			setImageIndex(generateRandomImageIndex(backgroundImagesCollection.length));
			setBackgroundImageStyle({
				backgroundImage: `url(${imagePath})`});
		}, 10000);	

		const imagePath: string = backgroundImagesCollection[generateRandomImageIndex(backgroundImagesCollection.length)].fields.file.url;

		return () => clearInterval(imageChanger);
	},[imageIndex, backgroundImagesCollection, backgroundImageStyle])

	return (
		<>
		{contentEntry && imageIndex === undefined ?
			(<div className="default-back-image-container"></div>)
			: (
			<div className='back-image-container' style={ showBackImage ? backgroundImageStyle : {} }>
				{Children}
			</div>
			)
		}
		</>
	);
};

export default RandomImage;
