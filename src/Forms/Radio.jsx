import React from 'react'
import { Label } from '../StyledComponents/FormElements'

const Radio = (props) => {
    console.log(props)
    const {id, labelName, addOptionList} = props.fieldDetails
  return (
    <div className="flex flex-col gap-3 items-start border border-gray-300 rounded p-2 w-1/3">
        <Label>{labelName}</Label>
        {addOptionList.map((each) => (
              <div key={each.id}>
              <input className='mr-3' type="radio" id={each.id} name={id}></input>
              <Label htmlFor={id}>{each.option}</Label>
          </div>
        ))}
     
    </div>
  )
}

export default Radio
