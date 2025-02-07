import { ReactNode,  useCallback,  useEffect,  useMemo,  useState } from 'react'
import { IContentEntry } from '../../types/contentfulTypes';
import './Randomimage.scss';
import { shuffleArray } from './generateRandomImageIndex';
import config from '../../config/config.mjs';


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

	const [loader, setLoader] = useState(true);
	const [backImage, setBackImage] = useState<string[]>([]);
	const loaderCSSUrl = `url('${config.backgroundSpinnerUrl}')`;

	const createBackgroundCSSUrls = useCallback((): string[] => {
		return backgroundImagesCollection.map((item) => `url('${item.fields.file.url}')`);
	}, [backgroundImagesCollection]);

	const imageUrls = useMemo(() => {
		const urlCollection =  createBackgroundCSSUrls();
		urlCollection.unshift(loaderCSSUrl);
		setBackImage(urlCollection);
		return urlCollection;
	}, [createBackgroundCSSUrls, loaderCSSUrl]);


	useEffect(() => {
		const imageChanger = setInterval(() => {
			if (loader) {
				setBackImage(imageUrls);
			}

			setLoader(false);
			setBackImage((prev) => {

				if(prev.length === 1) {
					if (imageUrls.includes(loaderCSSUrl)) {
						const loaderImageIndex = imageUrls.indexOf(loaderCSSUrl);
						imageUrls.splice(loaderImageIndex, 1);
					}
					return shuffleArray(imageUrls);
				}

				return prev.slice(1);
			});
		}, 10000);

		return () => {
			clearInterval(imageChanger);
		}
		
	}, [loader, backImage, imageUrls, loaderCSSUrl])

	return (
		<>
		{
			loader ? (
				<div className="default-back-image-container">
				</div>
			) : (
				<div className="back-image-container" style={{backgroundImage: backImage.join(', ')}}>
					{Children}
				</div>
			)

		}
		</>
	);
};

export default RandomImage;
