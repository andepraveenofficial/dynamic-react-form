import React from 'react'
import { Label } from '../StyledComponents/FormElements'
import { useDispatch } from 'react-redux'
import { editForm } from '../Store/Slices/finalFormSlice'

const Radio = (props) => {
    const {id, labelName, addOptionList} = props.fieldDetails
  
    // Global State
    const dispatch = useDispatch()

    // Handlers

    // Methods 
    const handleRadioButton = (e) => {
        
        dispatch(editForm({uniqueId:id, value:e.target.value}))

    }

  return (
    <div className="flex flex-col gap-3 items-start border border-gray-300 rounded p-2 w-1/3">
        <Label>{labelName}</Label>
        {addOptionList.map((each) => (
              <div key={each.id}>
              <input className='mr-3' type="radio" id={each.id} name={id} onChange={handleRadioButton} value={each.option}/>
              <Label htmlFor={id}>{each.option}</Label>
          </div>
        ))}
     
    </div>
  )
}

export default Radio
