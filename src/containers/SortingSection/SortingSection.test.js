import { render, screen, fireEvent, userEvent } from 'test-utils'
import SortingSection from './SortingSection'

it('test SortingSection Component', () => {
  const { asFragment } = render(<SortingSection />)

  expect(asFragment()).toMatchSnapshot()
})
