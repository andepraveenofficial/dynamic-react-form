import React from 'react'
import { InputBox, Label } from '../StyledComponents/FormElements'

const TextNumber = (props) => {
  
    const {labelName, type} = props.fieldDetails 
    console.log(labelName, type)
  return (
    <div>
      <Label>{labelName}</Label>
      <InputBox type={type}></InputBox>
    </div>
  )
}

export default TextNumber
