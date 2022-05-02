import { act } from 'react-test-renderer'
import { render, screen, fireEvent, userEvent } from 'test-utils'
import { addBooks } from '../../redux/mainFeature/mainSlice'
import { store } from '../../redux/store/store'
import BookList from './BookList'

const books = [
  {
    etag: '1',
    id: '1',
    volumeInfo: {
      authors: ['Conan', 'Boyle'],
      imageLinks: {
        smallThumbnail: 'https://url.com',
        thumbnail: 'https://url.com',
      },
      categories: ['Horror', 'Fiction'],
      pageCount: 30,
      description: 'Some text in description',
      language: 'ru',
      title: 'VERY GOOD TITLE',
      publishedDate: '1999',
      averageRating: 10,
    },
  },
  {
    etag: '2',
    id: '2',
    volumeInfo: {
      authors: ['Kayle', 'Dock'],
      imageLinks: {
        smallThumbnail: 'https://url2.com',
        thumbnail: 'https://url2.com',
      },
      categories: ['Science', 'Melody'],
      pageCount: 900,
      description: 'Another text in description',
      language: 'es',
      title: 'This is THE title',
      publishedDate: '2380',
      averageRating: 2,
    },
  },
]

it('test BookList Component', () => {
  const { asFragment } = render(<BookList />)

  expect(asFragment()).toMatchSnapshot()

  act(() => {
    store.dispatch(addBooks(books))
  })

  expect(screen.getByText(/VERY GOOD TITLE/)).toBeInTheDocument()
  expect(screen.getByText(/This is THE title/)).toBeInTheDocument()
})
