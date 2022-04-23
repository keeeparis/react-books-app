import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import LazyMinLoadTime from './LazyMinLoadTime'
import Suspence from './Suspence'

const App = LazyMinLoadTime(() => import('../pages/App'))
const Book = LazyMinLoadTime(() => import('../pages/Book'))

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Suspence component={<App />} />} />
          <Route path="/book/:id" element={<Suspence component={<Book />} />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
