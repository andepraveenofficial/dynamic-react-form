import React from 'react'
import { selectForm } from '../Store/Slices/selectFormSlice'
import { useDispatch } from 'react-redux'

const Dropdown = () => {
    const dispatch = useDispatch()
  return (
    <div className="mt-4">
    <select className='text-lg w-1/3 border rounded p-3 m-2 bg-gray-100 focus:outline-none focus:border-cyan-500' onChange={(e)=>{dispatch(selectForm(e.target.value))}}>
      <option value={""} defaultValue>Select Form Type</option>
      <option value="text">Text</option>
      <option value="number">Number</option>
      <option value="textarea">Textarea</option>
      <option value="dropdown">Dropdown</option>
      <option value="checkbox">Checkbox</option>
      <option value="radio">Radio</option>
    </select>
  </div>
  )
}

export default Dropdown
