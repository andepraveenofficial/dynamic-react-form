import React from 'react'
import { useSelector } from 'react-redux'

/* -----> External Components <----- */
import Text from '../Forms/Text'
import Number from '../Forms/Number'
import Textarea from '../Forms/Textarea'
import Dropdown from './Dropdown'
import Checkbox from '../Forms/Checkbox'
import Radio from '../Forms/Radio'

const FormSelection = () => {
    const {selectedForm} = useSelector((store) => store.selectForm)

    const renderForm = () => {
        switch (selectedForm) {
            case "text":
                return <Text/>
                break;
            case "number":
                return <Number/>
                break;
            case "textarea":
                return <Textarea/>
                break;
            case "dropdown":
                return <Dropdown/>
                break; 
            case "checkbox":
                return <Checkbox/>
                break;
            case "radio":
                return <Radio/>
                break;
          }
    }
   
  return (
    <div className='m-4'>
     {renderForm()}
    </div>
  )
}

export default FormSelection
