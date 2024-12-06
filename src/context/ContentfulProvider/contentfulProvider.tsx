import { useEffect, useState, useContext } from 'react';
import { ContentfulContext } from './contentfulContext';
import { getEntry, cleanContentEntry, cleanMusicEntries, cleanSocialMediaEntries } from '../customContextHooks/useContentful';
import { IContentEntry, ICleanedMixContent, ISocialMediaCollection } from '../../types/contentfulTypes';

const ContentfulProvider = ({children}: {children: JSX.Element}): JSX.Element  => {

  const [content, setContent] =  useState<IContentEntry>();
  const [musicContent, setMusicContent] = useState<ICleanedMixContent>();
  const [socialMedia, setSocialMedia] = useState<ISocialMediaCollection>();

  const [hasError, setHasError] = useState<boolean>(false);
  
  useEffect(() => {
    (async () => {
      try {
        const originalContent = await getEntry();
        const cleanedEntry = cleanContentEntry(originalContent!.defaultPage);
        const cleanedMusicEntries = cleanMusicEntries(originalContent!.musicPageContent);
        const cleanedSocialMediaEntries = cleanSocialMediaEntries(originalContent?.socialMediaEntries);
        
        setContent(cleanedEntry);
        setMusicContent(cleanedMusicEntries);
        setSocialMedia(cleanedSocialMediaEntries);

        
      } catch(error) {
        setHasError(true);
        console.log('error ======== ', error);
      }

    })();
  }, []);

  return (
    <ContentfulContext.Provider value={{content, hasError, musicContent, socialMedia}}>
      {children}
    </ContentfulContext.Provider>
  );
};

export default ContentfulProvider;

export const useParentProvider = () => useContext(ContentfulContext);
