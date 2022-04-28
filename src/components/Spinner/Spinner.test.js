import renderer from 'react-test-renderer'
import Spinner from './Spinner'

it('render spinner', () => {
  const component = renderer.create(<Spinner />).toJSON()
  expect(component).toMatchSnapshot()
})
