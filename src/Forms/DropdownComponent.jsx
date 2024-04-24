import React from 'react'
import { Label } from '../StyledComponents/FormElements'

const DropdownComponent = (props) => {
    console.log(props)
    const {id, labelName, addOptionList} = props.fieldDetails

  return (
    <div className='w-1/3'>
        <Label>{labelName}</Label>
        <select id={id}>
            {addOptionList.map((each) => (<option key={each.id} value={each.option}>{each.option}</option>))}
        </select>
    </div>
  )
}

export default DropdownComponent
