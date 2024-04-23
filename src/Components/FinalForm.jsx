import React from 'react'
import { useSelector } from 'react-redux'
import CreateForm from './CreateForm';

const FinalForm = () => {
   const finalFormList = useSelector((state) => state.finalForm);
   console.log(finalFormList)
  return (
    <div>
     {finalFormList.map((each) => <CreateForm key={each.id} formDetails={each}/>)}
    </div>
  )
}

export default FinalForm
