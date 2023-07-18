import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { IContentEntry } from '../../types/contentfulTypes';

const BoxedContent = ({contentEntry}: {contentEntry: IContentEntry}): JSX.Element => {
	if (!contentEntry) return (<></>);

	const { 
		pageTitle,
		description
	} = contentEntry;

	return (
		<>
			<div className='default-content'>
				<h1>{ pageTitle }</h1>
				<div className='scroll-content' dangerouslySetInnerHTML={{__html: description ? documentToHtmlString(description) : '<p></p>'}}></div>
			</div>
		</>
	);
};

export default BoxedContent;