import React from 'react'

import { useSelector } from 'react-redux'
import TextNumber from '../Forms/TextNumber'
import { Button } from '../StyledComponents/FormElements'
import Textarea from '../Forms/Textarea'

const DynamicForm = () => {
    const finalFormList = useSelector((state) => state.finalForm)
    console.log(finalFormList)
  return (
    <div className='flex flex-col gap-4 m-3'>
      {finalFormList.map((each) => {
        console.log(each)
        switch (each.type){
            case "text":
                return <TextNumber key={each.id} fieldDetails={each} />
            case "number":
                return <TextNumber key={each.id} fieldDetails={each}/>    
            case "textarea":
                return<Textarea key={each.id} fieldDetails={each}/>    
        }
      })}
      
      {finalFormList.length !== 0 && <Button className='self-start'>Submit</Button>}
    </div>
  )
}

export default DynamicForm
