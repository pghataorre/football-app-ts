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
  mixEntries: IMixEntries[];
}

export interface IMixEntries {
  fields: IMusicMixEntries[];
  meta: {};
  sys: {
    id: string;
  }
}

export interface IMusicMixEntries {
  fields: {
    mixTapeTitle: string;
    mixUrl: string;
    mixtapeDetails: {
      content: IMixDetailedContent[]
    };
    mixId: string;
    mixtapeMediaItems: [];
  }
  meta: {};
  sys: {}
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
  mixTapeCollection: IMixEntries[];
}