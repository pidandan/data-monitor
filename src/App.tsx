import React, { Suspense } from 'react'
import './App.less'
import Routes from './router/index'
const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes />
    </Suspense>
  )
}

export default App
