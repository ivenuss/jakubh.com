export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTrack = {
  artist: string;
  songUrl: string;
  audioUrl: string;
  title: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
};

export type TopTracks = {
  tracks: TopTrack[];
};

export type OgImage = {
  url: string;
  width: string;
  height: string;
  type: string;
};

export type TwitterImage = {
  url: string;
  width: string;
  height: string;
  alt?: any;
};

export type OgUrlResponse = {
  author: string;
  ogUrl: string;
  ogLocale: string;
  ogType: string;
  ogSiteName: string;
  ogDescription: string;
  ogTitle: string;
  dcLanguage: string;
  dcSubject: string;
  dcDescription: string;
  dcTitle: string;
  twitterCard: string;
  twitterSite: string;
  twitterTitle: string;
  twitterDescription: string;
  alIosUrl: string;
  ogImage?: OgImage;
  twitterImage?: TwitterImage;
  favicon: string;
  charset: string;
  requestUrl: string;
  success: boolean;
};
