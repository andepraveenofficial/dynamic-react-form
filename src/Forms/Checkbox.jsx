import React from 'react'
import { Label } from '../StyledComponents/FormElements'

const Checkbox = (props) => {
    console.log(props)
    const {id, labelName, addOptionList} = props.fieldDetails
  return (
    <div class="flex flex-col gap-3 items-start border border-gray-300 rounded p-2">
        <Label>{labelName}</Label>
       {addOptionList.map((each) =>  (
       <div>
            <input className='mr-3' type="checkbox" id={each.id}></input>
            <Label htmlFor={each.id}>{labelName}</Label>
        </div>
    ) )}
         
    </div>
  )
}

export default Checkbox
