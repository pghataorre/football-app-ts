import { useEffect, useState } from 'react';
import { showCountDownTimer, isStreamLive, streamDateFormatted } from '../../utils/utlis';
import { ILiveSession, ILiveStreamData, TStreamDateDetails } from '../../types/contentfulTypes';
import { StreamStateContext } from './streamStateContext';
import { cleanLiveStreamsEntry, getEntry } from '../customContextHooks/useStreamingContentful';

const StreamStateProvider = ({children}: {children: JSX.Element}): JSX.Element  => {
  const [liveStreamContent, setLiveStreamContent] = useState<ILiveSession | undefined>();
  const [hasError, setHasError] = useState<boolean>(false);
  const [streamDateDetails, setStreamDateDetails] = useState<TStreamDateDetails[] | undefined>();
  const [isStreamInProgress, setIsStreamInProgress] = useState<boolean>(false);
 
    useEffect(() => {
      (async () => {
          try {
            const originalContent = await getEntry();
            const liveStreamEntries  = cleanLiveStreamsEntry(originalContent?.liveStreams);
            setLiveStreamContent(liveStreamEntries);
          } catch (error) {
            setHasError(true);
            console.log('error ======== ', error);
          }
      })();
    }, []);

    useEffect(() => {

      const startDateTime = streamDateFormatted(`${liveStreamContent?.startDateTime}`, `${liveStreamContent?.endDateTime}`);
      const showTimerFlag = showCountDownTimer(liveStreamContent?.startDateTime || '');
  
      setStreamDateDetails([
        {
            liveStreamTitle: liveStreamContent?.liveStreamTitle,
            startDateTime,
            showTimerFlag,
            styleClass: 'live-stream-date-container-mobile',
            originalStartTime: liveStreamContent?.startDateTime
        },
        {
            liveStreamTitle: liveStreamContent?.liveStreamTitle,
            startDateTime,
            showTimerFlag,
            styleClass: 'live-stream-date-container show-details',
            originalStartTime: liveStreamContent?.startDateTime
        }
      ]);

    }, [liveStreamContent]);


    if (showCountDownTimer(liveStreamContent?.startDateTime || ''))  {
      const interval = setInterval(() => { 
        const startDateTime = streamDateFormatted(`${liveStreamContent?.startDateTime}`, `${liveStreamContent?.endDateTime}`);
        const showTimerFlag = showCountDownTimer(liveStreamContent?.startDateTime || '');

        if (!showTimerFlag) {
          clearInterval(interval);
          setStreamDateDetails([
            {
                liveStreamTitle: liveStreamContent?.liveStreamTitle,
                startDateTime,
                showTimerFlag,
                styleClass: 'live-stream-date-container-mobile',
                originalStartTime: liveStreamContent?.startDateTime
            },
            {
                liveStreamTitle: liveStreamContent?.liveStreamTitle,
                startDateTime,
                showTimerFlag,
                styleClass: 'live-stream-date-container show-details',
                originalStartTime: liveStreamContent?.startDateTime
            }
          ]);
        }
      }, 1000);
    }


    if (isStreamLive(liveStreamContent?.startDateTime || '', liveStreamContent?.endDateTime || '')) {
      const interval = setInterval(() => { 
        if (!isStreamLive(liveStreamContent?.startDateTime || '', liveStreamContent?.endDateTime || '')) {
          clearInterval(interval);
          setIsStreamInProgress(false);
        } else {
          if(!isStreamInProgress) {
            setIsStreamInProgress(true);
          }
        }
      }, 3000);

      console.log('IS LIVE');
    }

    const streamStatusData = {
      liveStreamContent,
      hasError,
      streamDateDetails,
      isStreamInProgress,
    } as ILiveStreamData;

    return (
      <StreamStateContext.Provider value={streamStatusData}>
        {children}
      </StreamStateContext.Provider>
    );
  };
  
  export default StreamStateProvider;


