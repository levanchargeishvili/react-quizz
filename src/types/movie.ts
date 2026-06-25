export interface ThumbnailSizes {
  small: string
  medium: string
  large: string
}

export interface Movie {
  title: string
  thumbnail: {
    regular: ThumbnailSizes
  }
  year: number
  category: 'Movie' | 'TV Series'
  rating: string
  isBookmarked?: boolean
  isTrending?: boolean
}

export type ThumbnailSize = keyof ThumbnailSizes
