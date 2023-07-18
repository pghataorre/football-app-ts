import { useEffect, useState } from 'react';
import { ContentfulContext } from './contentfulContext';
import { getEntry, cleanContentEntry, cleanMusicEntries } from '../customContextHooks/useContentful';
import { IContentEntry, ICleanedMixContent } from '../../types/contentfulTypes';

const ContentfulProvider = ({children}: {children: JSX.Element}): JSX.Element  => {

  const [content, setContent] =  useState<IContentEntry>();
  const [musicContent, setMusicContent] = useState<ICleanedMixContent>()
  const [hasError, setHasError] = useState<boolean>(false);
  
  useEffect(() => {
    (async () => {
      try {
        const originalContent = await getEntry();
        const cleanedEntry = cleanContentEntry(originalContent!.defaultPage);
        const cleanedMusicEntries = cleanMusicEntries(originalContent!.musicPageContent);

        setContent(cleanedEntry);
        setMusicContent(cleanedMusicEntries);
        
      } catch(error) {
        setHasError(true);
        console.log('error ======== ', error);
      }

    })();
  }, []);

  return (
    <ContentfulContext.Provider value={{content, hasError, musicContent}}>
      {children}
    </ContentfulContext.Provider>
  );
};

export default ContentfulProvider;
