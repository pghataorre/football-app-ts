import { createClient } from 'contentful';
import config from '../../config/config.mjs';
import { ICleanedMixContent, IContentEntry, ISocialMediaCollection } from '../../types/contentfulTypes';

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
    const defaultPage = await contentFulClient.getEntry('wbp1AL9SvovWWYCq6c92r');
    const musicPageContent = await contentFulClient.getEntries({
        content_type:'mixesCollection', 
        order: ['sys.createdAt']
    });

    const socialMediaEntries = await contentFulClient.getEntries({content_type: 'socialMediaList'});

    const liveStreams = await contentFulClient.getEntries({content_type: 'liveStreams'});

    return {musicPageContent, defaultPage, socialMediaEntries, liveStreams};
  } catch (errors){
    console.log('error occurred - contentful call --- ', errors);
  }
}

  const cleanContentEntry = (contentEntry: any): IContentEntry => {
    return {
      pageTitle: contentEntry.fields.pageHeading,
      backgroundImagesCollection: contentEntry.fields.backImgs,
      description: contentEntry.fields.description
    }
  }

  const cleanMusicEntries = (mixContentEntry: any): ICleanedMixContent => {
    return {
      pageTitle: mixContentEntry.items[0].fields.mixPageTitle,
      pageDescription: mixContentEntry.items[0].fields.mixPageDescription,
      mixTapeCollection: mixContentEntry.items[0].fields.mixEntries.map((mixItems: any, index: number) =>  {

        return {
          mixId: mixItems.fields.mixId,
          mixTapeTitle: mixItems.fields.mixTapeTitle,
          mixUrl: mixItems.fields.mixUrl,
          mixTapeImageUrl: getAssetImageUrl(mixContentEntry, mixItems)
        }
      })
    }
  }

 
  const getAssetImageUrl = (mixContentEntry: any, mixItems: any) => {
    const imagePath = mixContentEntry.includes.Asset.filter((assetItem: any) => {
      return assetItem.sys.id === mixItems.fields.mixtapeMediaItems[0].sys.id
    });
    
    return imagePath[0].fields.file.url;
  }


  const cleanSocialMediaEntries = (socialMediaEntries: any): ISocialMediaCollection => {
      return { 
        socialMediaCollection: socialMediaEntries.items[0].fields.socialMediaLink.map((socialMediaItem: any) => {
          return {
            socialMediaName: socialMediaItem.fields.socialMediaName,
            socialMediaLink: socialMediaItem.fields.socialMediaLink,
            socialMediaIcon: socialMediaItem.fields.socialMediaImage.fields.file.url
          }
      }),
    }
  }

export {getEntry, cleanContentEntry, cleanMusicEntries, cleanSocialMediaEntries};