import React from 'react'
import { render, screen, fireEvent, userEvent } from 'test-utils'

import Input from './Input'

const props = {
  value: '',
  onChange: jest.fn(),
}

beforeEach(() => {
  render(<Input {...props} />)
})

describe('Input', () => {
  test('calls the onChange callback handler', async () => {
    await userEvent.type(screen.getByRole('input'), 'Steve')
    expect(props.onChange).toBeCalledTimes(5)
  })
})
