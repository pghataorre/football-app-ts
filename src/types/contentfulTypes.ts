import { Document } from "@contentful/rich-text-types";

export interface IContext {
  musicContent?: ICleanedMixContent | undefined;
  content?: IContentEntry | undefined;
  hasError: boolean;
  socialMedia: ISocialMediaCollection | undefined;
}

export interface ILiveSession {
  liveStreamTitle: string;
  startDateTime: string;
  endDateTime: string;
  streamDescription: Document,
  streamLogo: string;
  scheduledStream: string;
  defaultStreamingDescription: Document;
  videoPreloadUrl: string;
}

export interface ILiveStreamData {
  liveStreamContent: ILiveSession | undefined;
  hasError: boolean;
  streamDateDetails: TStreamDateDetails[];
  isStreamInProgress: boolean;
}


export interface ISocialMediaCollection {
  socialMediaCollection: ISocialMedia[];
}

export interface ISocialMedia {
  socialMediaName: string;
  socialMediaLink: string;
  socialMediaIcon: string;
}

export interface IContentEntry {
  pageTitle?: string;
  backgroundImagesCollection: IImageCollection[];
  description?: Document;
}

export interface IImageCollection {
    metadata: {
        tags: string[] | [];
        concepts: string[] | [];
    },
    sys: {
        space: {
            sys: {
                type: string;
                linkType: string;
                id: string;
            }
        },
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
            sys: {
                id: string;
                type: string;
                linkType: string;
            }
        },
        publishedVersion: number;
        revision: number;
        locale: string;
    },
    fields: {
        title: string;
        description: string | undefined;
        file: {
            url: string;
            details: {
                size: number;
                image: {
                    width: number;
                    height: number;
                }
            },
            fileName: string;
            contentType:  string;
        }
    }
}

export interface IMixCollection {
  includes: {};
  items: [{
    fields: IMixPage
    sys: {};
    metadata: {};
  }];
  limit: number;
  skip: number;
  sys: {
    type: string;
  };
  total: number;
}

export interface IMixPage {
  mixPageTitle: string;
  mixPageDescription: IMixDetailedContent;
  mixTapeCollection: IMusicMixEntries[];
}

export interface IMusicMixEntries {
  mixId: string;
  mixTapeTitle: string;
  mixUrl: string;
  mixTapeImageUrl: string;
}

export type IMixDetailedContent = [{
  data: {};
  marks: [];
  nodeType?: string;
  value?: string;
  sys: {}
}];


export interface ICleanedMixContent {
  pageTitle: string;
  pageDescription: Document;
  mixTapeCollection: IMusicMixEntries[];
}


export type TStreamDateDetails = {
  liveStreamTitle: string | undefined;
  startDateTime: string;
  showTimerFlag: boolean;
  styleClass: string;
  originalStartTime: string | undefined;
};

export interface IStreamDateDetails {
  streamDetails: TStreamDateDetails;
}

export type TMixItem = {
  mixId: string;
  mixTapeTitle: string;
  mixTapeImageUrl: string;
}
