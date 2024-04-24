import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import TextNumber from '../Forms/TextNumber'
import { Button } from '../StyledComponents/FormElements'
import Textarea from '../Forms/Textarea'
import DropdownComponent from '../Forms/DropdownComponent'
import Checkbox from '../Forms/Checkbox'
import Radio from '../Forms/Radio'
import { checkConsoleTrigger } from '../Store/Slices/checkConsoleSlice'

const DynamicForm = () => {
    const finalFormList = useSelector((state) => state.finalForm)
  const submitForm = useSelector((state) => state.submitForm);
    const dispatch = useDispatch()

  // Methods 
const handleSubmitButton = (event) => {
 event.preventDefault()
  setTimeout(()=>{
    dispatch(checkConsoleTrigger(false))
  }, 2000)
  dispatch(checkConsoleTrigger(true))

  finalFormList.map((each) => {
   console.log(each)
  })

  console.log(submitForm)
}

  return (
    <div className='m-3'>
      <form onSubmit={handleSubmitButton} className='flex flex-col gap-4'>
      {finalFormList.map((each) => {
        console.log(each)
        switch (each.type){
            case "text":
                return <TextNumber key={each.id} fieldDetails={each} />
            case "number":
                return <TextNumber key={each.id} fieldDetails={each}/>    
            case "textarea":
                return<Textarea key={each.id} fieldDetails={each}/>  
            case "dropdown":
              return <DropdownComponent key={each.id} fieldDetails={each}/> 
            case "checkbox":
              return <Checkbox key={each.id} fieldDetails={each}/>   
            case "radio":
              return <Radio key={each.id} fieldDetails={each}/>      
        }
      })}
      
      {finalFormList.length !== 0 && <Button type="submit" className='self-start' >Submit</Button>}
      </form>
    
    </div>
  )
}

export default DynamicForm
