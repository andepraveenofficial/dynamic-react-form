import React from 'react'
import { InputBox } from '../StyledComponents/FormElements'

const CreateForm = (props) => {
    const {formDetails} = props
   const {label, type} = formDetails

   const renderFormField = () =>{
    switch (type){
        case "text":
            return <InputBox type={type} placeholder="Enter Text Here"></InputBox>
        case "number":
            return <InputBox type={type} placeholder="Enter Number Here"></InputBox>
        case "textarea":
                return <textarea className='border p-2' col="100" rows="5" placeholder='Enter Feedback'></textarea>
    }
   }
  return (
    <div className='flex flex-col items-start gap-2 p-3 border m-4'>
      <label>{label}</label>
    {renderFormField()}
      
    </div>
  )
}

export default CreateForm
