import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import PreLoaderVideo from '../PreLoaderVideo/PreLoaderVideo';
import { useContext } from 'react';
import { StreamStateContext } from '../../../context/StreamProvider/streamStateContext';

const NoStreamDefault = () => {
    const {liveStreamContent, streamDateDetails} = useContext(StreamStateContext);
    return (
        <>
            <PreLoaderVideo 
                imagePath={liveStreamContent?.streamLogo || ''}
                showTimerFlag={streamDateDetails?.[0]?.showTimerFlag} 
                videoPreloadUrl={liveStreamContent?.videoPreloadUrl || ''}                
            />
            <div className="scroll-content" dangerouslySetInnerHTML={{__html: liveStreamContent?.defaultStreamingDescription  ? documentToHtmlString(liveStreamContent?.defaultStreamingDescription) : '<p></p>'}}></div>
        </>
    );

}

export default NoStreamDefault;
