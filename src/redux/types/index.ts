export interface mainState {
  startIndex: number
  skip: boolean
  input: string
  totalItems: number
  books: Book[]
  category: Category
  sorting: Sorting
}

export interface Book {
  etag: string
  id: string
  volumeInfo: volumeInfo
}

export interface volumeInfo {
  authors?: string[]
  imageLinks?: {
    smallThumbnail: string
    thumbnail: string
  }
  categories?: string[]
  pageCount?: number
  description?: string
  language?: string
  title?: string
  publishedDate?: string
}

export enum Category {
  ALL = 'all',
  ART = 'art',
  BIOGRAPHY = 'biography',
  COMPUTERS = 'computers',
  HISTORY = 'history',
  MEDICAL = 'medical',
  POETRY = 'poetry',
  FICTION = 'fiction',
}

export enum Sorting {
  RELEVANCE = 'relevance',
  NEWEST = 'newest',
}
