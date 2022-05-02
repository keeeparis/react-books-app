import React from 'react'
import { render, screen, fireEvent, userEvent } from 'test-utils'

import Form from './Form'

// const props = {
//   value: '',
//   onChange: jest.fn(),
// }

beforeEach(() => {
  render(<Form />)
})

describe('Form', () => {
  test('button disabled initially', async () => {
    expect(screen.getByRole('button')).toBeDisabled()
  })
  test('button is not disabled after input changed', async () => {
    await userEvent.type(screen.getByRole('input'), 'Steve')
    expect(screen.getByRole('button')).not.toBeDisabled()
  })
})
