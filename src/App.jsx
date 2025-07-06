import { useState } from 'react'
import Notes from './components/Notes'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <>
      <Toaster position='top-center'/>
      <Notes/>
    </>
  )
}

export default App
