import React from 'react'
import Dropdown from './Components/Dropdown'
import FormSelection from './Components/FormSelection'
import FinalForm from './Components/FinalForm'

const App = () => {
  return (
    <div>
      <h1 className='text-4xl text-center text-cyan-500'>React Dynamic Forms</h1>
      <Dropdown/>
      <FormSelection/>
      <hr/>
      <FinalForm/>
    </div>
  )
}

export default App
