import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { IContentEntry } from '../../types/contentfulTypes';
import './Randomimage.scss';
type TBackgroundImage = {
	backgroundImage: string | undefined;
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

	const [backgroundImageStyle, setBackgroundImageStyle] = useState<TBackgroundImage | undefined>(undefined);
	const [loader, setLoader] = useState(true);

	const setBackgroundUrls = (imageUrls: string[]) => {
		if (imageUrls.length > 0) {
			setBackgroundImageStyle({backgroundImage : imageUrls.join(',' )});
		}
	}

	const createBackgroundCSSUrls = useCallback((): string[] => {
		return backgroundImagesCollection.map((item) => `url(${item.fields.file.url})`);
	}, [backgroundImagesCollection])

	const imageUrls = useMemo(() => {
		const urlCollection =  createBackgroundCSSUrls();
		urlCollection.unshift(`url('')`);
		return urlCollection;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const imageChanger = setInterval(() => {
			setLoader(false);

			if (imageUrls!.length !== 0) {
				imageUrls.shift();
				setBackgroundUrls(imageUrls);
			} else {
				const regeneratedUrls = createBackgroundCSSUrls();
				setBackgroundUrls(regeneratedUrls);
			}
		}, 10000);

		return () => {
			clearInterval(imageChanger);
		}
		
	}, [backgroundImageStyle, createBackgroundCSSUrls, imageUrls, loader])

	return (
		<>
			<div className={loader ? 'default-back-image-container' : 'back-image-container' } style={ showBackImage ? backgroundImageStyle : {} }>
				{Children}
			</div>
		</>
	);
};

export default RandomImage;
