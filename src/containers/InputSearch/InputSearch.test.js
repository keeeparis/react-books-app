import React from 'react'
import { render, screen, fireEvent, userEvent } from 'test-utils'

import InputSearch from './InputSearch'

const props = {
  value: '',
  onChange: jest.fn(),
}

beforeEach(() => {})

describe('InputSearch', () => {
  test('calls the onChange callback handler', async () => {
    const { asFragment } = render(<InputSearch {...props} />)
    await userEvent.type(screen.getByRole('input'), 'Steve')
    expect(props.onChange).toBeCalledTimes(5)
    expect(asFragment()).toMatchSnapshot()
  })
})
