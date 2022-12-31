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
  alt?: string;
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

/*
  Spotify
*/
type SpotifyArtist = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

type SpotifyAlbumImage = {
  height: number;
  url: string;
  width: number;
};

type SpotifyAlbum = {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: [SpotifyAlbumImage, SpotifyAlbumImage, SpotifyAlbumImage];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

type SpotifyTrack = {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type GetTopTracksResponse = {
  href: string;
  items: SpotifyTrack[];
  limit: number;
  next?: string;
  previous?: string;
  offset: number;
  total: number;
};

export type GetAccessTokenRes = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
};

export type GetNowPlayingRes = {
  currently_playing_type: 'track';
  is_playing: boolean;
  item: SpotifyTrack;
  progress_ms: number;
  timestamp: number;
};
