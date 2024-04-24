import React from 'react'
import { Label, StyledTextArea } from '../StyledComponents/FormElements'

const Textarea = (props) => {
    const {labelName} = props.fieldDetails 

  return (
    <div className='flex flex-col items-start'>
       <Label>{labelName}</Label>
      <StyledTextArea cols="80" required/>
    </div>
  )
}

export default Textarea
