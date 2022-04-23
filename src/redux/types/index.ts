export interface mainState {
  startIndex: number
  skip: boolean
  input: string
  totalItems: number
  books: any[]
  category: Category
  sorting: Sorting
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
