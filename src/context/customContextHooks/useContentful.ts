import { createClient } from 'contentful';
import config from '../../config/config.mjs';
import { ICleanedMixContent, IContentEntry } from '../../types/contentfulTypes';

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
    const musicPageContent = await contentFulClient.getEntries({ content_type:'mixesCollection'});      
    return {musicPageContent, defaultPage};
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
      mixTapeCollection: mixContentEntry.items[0].fields.mixEntries,
    }
  }

export {getEntry, cleanContentEntry, cleanMusicEntries};