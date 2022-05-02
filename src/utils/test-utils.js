import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import 'regenerator-runtime/runtime'
import { Provider } from 'react-redux'
import { store } from '../redux/store/store'
import { MemoryRouter } from 'react-router-dom'
import '../i18n/config'

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  )
}

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'
export * from '@testing-library/jest-dom'
export { userEvent }
export * from 'regenerator-runtime/runtime'
export * from '../i18n/config'

export { customRender as render }
