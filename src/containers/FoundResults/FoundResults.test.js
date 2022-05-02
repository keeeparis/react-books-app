import { act } from 'react-test-renderer'
import { render, screen, fireEvent, userEvent } from 'test-utils'
import { updateTotalItemsResponse } from '../../redux/mainFeature/mainSlice'
import { store } from '../../redux/store/store'
import FoundResults from './FoundResults'

it('test FoundResults Component', () => {
  const { asFragment } = render(<FoundResults />)

  expect(asFragment()).toMatchSnapshot()

  act(() => {
    store.dispatch(updateTotalItemsResponse(200))
  })

  expect(screen.getByText(/200/)).toBeInTheDocument()

  expect(asFragment()).toMatchSnapshot()
})
