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
  ALL = 'All',
  ART = 'Art',
  BIOGRAPHY = 'Biography',
  COMPUTERS = 'Computers',
  HISTORY = 'History',
  MEDICAL = 'Medical',
  POETRY = 'Poetry',
  FICTION = 'Fiction',
}

export enum Sorting {
  RELEVANCE = 'relevance',
  NEWEST = 'newest',
}
