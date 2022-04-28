import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Navigation from './Navigation'

it('test Navigation Component', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
