import { createClient } from 'contentful';
import config from '../../config/config.mjs';
import { ILiveSession } from '../../types/contentfulTypes';

const getEntry = async () => {
  const { contentful: {
      spaceToken,
      accessToken,
      hostUrl
    }
  } = config; 

  const contentFulClient = createClient({
    space: spaceToken,
    accessToken,
    host: hostUrl
  })

  try {
    const liveStreams = await contentFulClient.getEntries({content_type: 'liveStreams'});
    return {liveStreams};
  } catch (errors){
    console.log('error occurred - contentful call --- ', errors);
  }
}

const cleanLiveStreamsEntry = (liveStreams: any): ILiveSession => { 
  return {
    liveStreamTitle: liveStreams.items[0].fields.liveStreamTitle,
    startDateTime: liveStreams.items[0].fields.startDateTime,
    endDateTime: liveStreams.items[0].fields.endDateTime,
    streamDescription: liveStreams.items[0].fields.streamDescription,
    streamLogo: liveStreams.items[0].fields.streamFlyer[0].fields.file.url,
    scheduledStream: liveStreams.items[0].fields.scheduledStream,
    defaultStreamingDescription: liveStreams.items[0].fields.defaultStreamingDescription,
    videoPreloadUrl: liveStreams.items[0].fields.videoPreloader.fields.file.url,
  }
}

export {getEntry, cleanLiveStreamsEntry};