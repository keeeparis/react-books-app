import React from 'react'
import { render, screen, fireEvent, userEvent } from 'test-utils'
import { categories, sorting } from '../../mock'

import Select from './Select'

const props = {
  data: categories,
  value: categories[0],
  onClick: jest.fn(),
}

const props2 = {
  data: sorting,
  value: sorting[0],
  onClick: jest.fn(),
}

it('test Select with categories Component', () => {
  const { asFragment } = render(<Select {...props} />)

  expect(asFragment()).toMatchSnapshot()
})

it('test Select with sorting Component', () => {
  const { asFragment } = render(<Select {...props2} />)

  expect(asFragment()).toMatchSnapshot()
})

beforeEach(() => {
  render(<Select {...props} />)
})

describe('Select', () => {
  test('no items initially', async () => {
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
  test('after click items are', () => {
    fireEvent.click(screen.getByRole('selected'))
    expect(screen.getAllByRole('listitem')).toHaveLength(categories.length)
  })
  test('register click on item and hide items', async () => {
    fireEvent.click(screen.getByRole('selected'))
    fireEvent.click(screen.getByText(/COMPUTERS/))
    expect(props.onClick).toHaveBeenCalledTimes(1)
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
  test('register click on selected and hide items', async () => {
    fireEvent.click(screen.getByRole('selected'))
    fireEvent.click(screen.getByRole('selected'))
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
})
