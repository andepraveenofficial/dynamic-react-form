import React, { useState } from 'react'
import { Label, StyledTextArea } from '../StyledComponents/FormElements'
import {useDispatch} from "react-redux"
import { editForm } from '../Store/Slices/finalFormSlice'

const Textarea = (props) => {
    const {labelName,id} = props.fieldDetails 
    const [textarea, setTextarea] = useState("")
    const dispatch = useDispatch()

    // Methods
    const handletextareaInput = (e) => {
      setTextarea(e.target.value)
      dispatch(editForm({uniqueId:id, value:e.target.value}))
    }

  return (
    <div className='flex flex-col items-start'>
       <Label>{labelName}</Label>
      <StyledTextArea cols="80" required value={textarea} onChange={handletextareaInput}/>
    </div>
  )
}

export default Textarea
