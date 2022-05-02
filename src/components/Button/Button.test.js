import { render, screen, fireEvent, userEvent } from 'test-utils'
import Button from './Button'

it('test Button Component', () => {
  const { asFragment } = render(<Button />)

  expect(asFragment()).toMatchSnapshot()
})
