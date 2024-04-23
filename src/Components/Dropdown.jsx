import React from 'react'
import { selectForm } from '../Store/Slices/selectFormSlice'
import { useDispatch } from 'react-redux'

const Dropdown = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <select className='text-2xl border p-3 m-2' onChange={(e)=>{dispatch(selectForm(e.target.value))}}>
        <option  value="Select Form Type" defaultValue disabled>Select Form Type</option>
        <option value="text">text</option>
        <option value="number">number</option>
        <option value="textarea">textarea</option>
        <option value="dropdown">dropdown</option>
        <option value="checkbox">checkbox</option>
        <option value="radio">radio</option>
      </select>
    </div>
  )
}

export default Dropdown
