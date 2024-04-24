import React from 'react'
import { Label } from '../StyledComponents/FormElements'
import { useDispatch } from 'react-redux'
import { editForm } from '../Store/Slices/finalFormSlice'

const DropdownComponent = (props) => {
  
    const {id, labelName, addOptionList} = props.fieldDetails

    // Global State
    const dispatch = useDispatch()

    // Methods
    const handleDropdownInput = (e) => {
      dispatch(editForm({uniqueId:id, value:e.target.value}))
    }

  return (
    <div className='w-1/3'>
        <Label>{labelName}</Label>
        <select id={id} onChange={handleDropdownInput}>
            {addOptionList.map((each) => (<option key={each.id} value={each.option}>{each.option}</option>))}
        </select>
    </div>
  )
}

export default DropdownComponent
