import React from 'react'
import { InputBox } from '../StyledComponents/FormElements'

const CreateForm = (props) => {
    const {formDetails} = props
   const {label, type} = formDetails
  return (
    <div className='flex flex-col items-start gap-2 p-3 border m-4'>
      <label>{label}</label>
      <InputBox type={type} placeholder="Enter Here"></InputBox>
    </div>
  )
}

export default CreateForm
