import { useContext } from 'react';
import { ContentfulContext } from '../../context/ContentfulProvider/contentfulContext';
import './SocialMediaList.scss';

const SocialMediaList = (): JSX.Element => {
	const {socialMedia, hasError} = useContext(ContentfulContext);

	if (!socialMedia) return (<></>);
	if (hasError) return (<></>);

	const {
		socialMediaCollection
	} = socialMedia;

	return (
		<div className='social-media-links-container'>
			<ul className='social-media-list'>
				{
					socialMediaCollection?.map((item) => {    
                        return (
                            <li key={item.socialMediaName}>
                                <a href={item.socialMediaLink} title={item.socialMediaName} target="_blank" rel="noreferrer"> 
                                    <img src={item.socialMediaIcon} alt={item.socialMediaName} />
                                </a>
                            </li>
					    )
                })
				}
			</ul>
		</div>
	);
};

export default SocialMediaList;
