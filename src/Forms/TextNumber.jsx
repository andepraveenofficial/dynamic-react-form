import React from 'react'
import { InputBox, Label } from '../StyledComponents/FormElements'

const TextNumber = (props) => {
  const {labelName, type} = props.fieldDetails 
  return (
    <div className='flex gap-3 items-center'>
      <Label>{labelName}</Label>
      <InputBox type={type} required></InputBox>
    </div>
  )
}

export default TextNumber
