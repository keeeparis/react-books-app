import { render, screen, fireEvent, userEvent } from 'test-utils'
import SearchHistory from './SearchHistory'

const props = {
  history: ['far', 'boo', 'baz'],
  handleHistorySearchClick: jest.fn(),
  deleteFromSearchHistory: jest.fn(),
  historyVisible: false,
}

it('test SearchHistory Component', () => {
  const { asFragment } = render(<SearchHistory {...props} />)

  expect(asFragment()).toMatchSnapshot()
})
