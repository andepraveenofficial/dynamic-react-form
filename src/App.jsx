import React from 'react'
import Dropdown from './Components/Dropdown'
import AddForm from './Components/AddForm'
import { useSelector } from 'react-redux'
import DynamicForm from './Components/DynamicForm'

const App = () => {
  const selectedForm = useSelector((store) => store.selectForm.selectedForm)

  // Global State 
  const checkConsole = useSelector((state) => state.checkConsole)

  return (
    <div className='m-5'>
      <div>
      <h1 className='text-4xl text-center text-cyan-500 font-bold mt-8 mb-4'>React Dynamic Forms</h1>
      <Dropdown/>
      {selectedForm != "" && <AddForm/>}
      </div>
    <hr className='mt-4'/>
      <div>
        <DynamicForm/>
      </div>
      
      <div>
        {checkConsole && <h1 className="text-red-500 font-bold">Check Console for Form Data</h1>}
        
      </div>
    </div>
  )
}

export default App
