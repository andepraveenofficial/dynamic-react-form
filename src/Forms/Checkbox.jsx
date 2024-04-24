import React from 'react'
import { Label } from '../StyledComponents/FormElements'

const Checkbox = (props) => {
    const {id, labelName, addOptionList} = props.fieldDetails
    
  return (
    <div class="flex flex-col gap-3 items-start border border-gray-300 rounded p-2 w-1/3">
        <Label>{labelName}</Label>
       {addOptionList.map((each) =>  (
       <div>
            <input className='mr-3' type="checkbox" id={each.id} value={each.option}></input>
            <Label htmlFor={each.id}>{each.option}</Label>
        </div>
    ) )}
         
    </div>
  )
}

export default Checkbox
