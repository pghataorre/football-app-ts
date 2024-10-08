import { Document } from "@contentful/rich-text-types";

export interface IContext {
  musicContent?: ICleanedMixContent | undefined;
  content?: IContentEntry | undefined;
  hasError: boolean;
  socialMedia: ISocialMediaCollection | undefined;
}

export interface ISocialMediaCollection {
  socialMediaCollection: ISocialMedia[];
}

export interface ISocialMedia {
  socialMediaName: string;
  socialMediaLink: string;
  socialMediaIcon: string;
}

export  interface IContentEntry {
  pageTitle?: string;
  backgroundImagesCollection: IImageCollection[] | [];
  description?: Document;
  error?: boolean;
}

export interface IImageCollection {
  fields: {
    file: {
      url: string;
    },
    fileName: string;
    contentType: string;
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