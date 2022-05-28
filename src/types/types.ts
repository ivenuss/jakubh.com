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

export type CloudinaryImage = {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: Date;
  bytes: number;
  width: number;
  height: number;
  url: string;
  secure_url: string;
};

export type Album = {
  id: number;
  createdAt: Date;
  slug: string;
  name?: string | null;
  thumbnailSrc: string | null;
  bannerSrc: string | null;
  description?: string | null;
  images?: AlbumImage[];
};

export type AlbumImage = {
  id: number;
  createdAt: Date;
  albumId: number;
  description?: string | null;
  name?: string | null;
  imageSrc: string;
};

export type GooglePhoto = {
  id: string;
  description: string;
  productUrl: string;
  baseUrl: string;
  mimeType: string;
  mediaMetadata: PhotoMediaMetadata;
  filename: string;
};

export type PhotoMediaMetadata = {
  creationTime: Date;
  width: string;
  height: string;
  photo: Object;
};

export type GooglePhotos = {
  error?: string;
  photos?: GooglePhoto[];
  parameters: {
    albumId: string;
    pageSize: number;
  };
};
