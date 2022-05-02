import { render, screen, fireEvent, userEvent } from 'test-utils'
import LanguagePicker from './LanguagePicker'

it('test LanguagePicker Component', () => {
  const { asFragment } = render(<LanguagePicker />)

  expect(asFragment()).toMatchSnapshot()
})
