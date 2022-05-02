import { render, screen, fireEvent, userEvent } from 'test-utils'
import Footer from './Footer'

it('test Footer Component', () => {
  const { asFragment } = render(<Footer />)

  expect(asFragment()).toMatchSnapshot()
})
