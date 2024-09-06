import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useContext, useState } from 'react';
import { ContentfulContext } from '../../context/ContentfulProvider/contentfulContext';
import MusicListItem from '../MusicMixItems/MusicMixItems';


const MusicMixList = (): JSX.Element => {

	const [showPlayerIndex, setShowPlayerIndex] = useState<number>(-1);
	const {musicContent, hasError} = useContext(ContentfulContext);


	if (! musicContent) return (<></>);
	if (hasError) return (<></>);

	const {
		pageTitle,
		pageDescription,
		mixTapeCollection
	} = musicContent;

	return (
		<div className='mix-content-container'>
			<h1>{pageTitle}</h1>
			<p dangerouslySetInnerHTML={{__html: pageDescription ? documentToHtmlString(pageDescription) : '<p></p>'}}></p>
			<ul className='mix-list'>
				{
					mixTapeCollection.map((item, index) => (
						<MusicListItem 
							key={item.sys.id}
							mixItem={item} 
							itemIndex={index} 
							setShowPlayerIndex={setShowPlayerIndex} 
							showPlayerIndex={showPlayerIndex}
						/>
					))
				}
			</ul>
		</div>
	);
};

export default MusicMixList;
