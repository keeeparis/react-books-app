import { render, screen, fireEvent, userEvent } from 'test-utils'
import Emoji from './Emoji'

const props = {
  label: 'books',
  symbol: '📚',
}

it('test Emoji Component', () => {
  const { asFragment } = render(<Emoji {...props} />)

  expect(asFragment()).toMatchSnapshot()
})
