import React from 'react'
import Spinner from '../../components/Spinner'

const Suspense = ({ component }: { component: React.ReactNode }) => (
  <React.Suspense fallback={<Spinner />}>{component}</React.Suspense>
)

export default Suspense
