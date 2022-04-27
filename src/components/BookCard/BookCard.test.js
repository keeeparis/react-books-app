import renderer from 'react-test-renderer'
import BookCard from './BookCard'
import Fade from '../../containers/Fade'
import { MemoryRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Category } from '../../redux/types'
import { transformAuthors, transformCategory, transformImage } from './helper'

const book = {
  categories: [Category.ART, Category.FICTION],
  authors: ['Conan Doyle', 'Richard Dawkins'],
  title: 'Crime and Punishment',
  imageLinks: {
    thumbnail: 'https://some-url.com',
  },
  description: 'What a beautiful story to tell about Rodion Raskolnikov.',
}

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(({ children }) => children)
  return { CSSTransition: FakeTransition }
})

it('test BookCard Component', () => {
  const component = renderer.create(
    <MemoryRouter>
      <BookCard book={book} id={1} />
    </MemoryRouter>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('testing transform Categories', () => {
  const data = [
    { value: [], toEqual: <>&nbsp;</> },
    { value: 1, toEqual: <>&nbsp;</> },
    { value: [Category.ART], toEqual: Category.ART },
    { value: [Category.ART, Category.FICTION], toEqual: Category.ART },
  ]

  data.forEach((element) => {
    it(`testing ${element.value} to equal ${element.toEqual}`, () => {
      const expected = transformCategory(element.value)
      expect(expected).toStrictEqual(element.toEqual)
    })
  })
})

describe('testing transform Images', () => {
  const data = [
    { value: {}, toEqual: <div>Нет изображения</div> },
    { value: [], toEqual: <div>Нет изображения</div> },
    { value: 1, toEqual: <div>Нет изображения</div> },
    { value: '1', toEqual: <div>Нет изображения</div> },
    {
      value: { thumbnail: '' },
      toEqual: <div>Нет изображения</div>,
    },
    {
      value: { thumbnail: 'https://some-url.com' },
      toEqual: (
        <img src={'https://some-url.com'} alt="picture" loading="lazy" />
      ),
    },
  ]

  data.forEach((element) => {
    it(`testing ${element.value} to equal ${element.toEqual}`, () => {
      const expected = transformImage(element.value)
      expect(expected).toStrictEqual(element.toEqual)
    })
  })
})

describe('testing transform Authors', () => {
  const data = [
    { value: {}, toEqual: null },
    { value: [], toEqual: null },
    { value: 1, toEqual: null },
    { value: '1', toEqual: null },
    // {
    //   value: ['Conan Doyle'],
    //   toEqual: [
    //     <h4 className="author" key={'Conan Doyle'}>
    //       Conan Doyle
    //     </h4>,
    //   ],
    // },
    // {
    //   value: ['Conan Doyle', 'Richard Dawkins'],
    //   toEqual: [
    //     <h4 className="author">
    //       {'Conan Doyle'}
    //       {','}
    //     </h4>,
    //     <h4 className="author">Richard Dawkins</h4>,
    //   ],
    // },
  ]

  data.forEach((element) => {
    it(`testing ${element.value} to equal ${element.toEqual}`, () => {
      const expected = transformAuthors(element.value)
      expect(expected).toStrictEqual(element.toEqual)
    })
  })
})
