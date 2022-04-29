import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import AppRouter from './containers/AppRouter'

import { store } from './redux/store/store'

import './i18n/config'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <AppRouter />
  </Provider>
  // </React.StrictMode>
)
