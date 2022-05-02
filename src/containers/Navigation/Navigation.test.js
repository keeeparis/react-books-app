import { render, screen, fireEvent, userEvent } from 'test-utils'
import Navigation from './Navigation'

it('test Navigation Component', () => {
  const { asFragment } = render(<Navigation />)

  expect(asFragment()).toMatchSnapshot()
})
