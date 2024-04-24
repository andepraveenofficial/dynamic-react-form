import React, { useState } from 'react'
import { InputBox, Label } from '../StyledComponents/FormElements'
import { useSelector, useDispatch } from 'react-redux'
import {editForm} from "../Store/Slices/finalFormSlice"

const TextNumber = (props) => {
  const {labelName, type, id} = props.fieldDetails 
  const [text, setText] = useState("")

// Global State
const finalForm = useSelector((state) => state.finalForm)
const dispatch = useDispatch()

  const handleInputText = (e) => {
    setText(e.target.value)
    finalForm.forEach((each) => {
     
         if (id === each.id){
            dispatch(editForm({uniqueId:id, value:e.target.value}))
         }
    })
  }

  return (
    <div className='flex gap-3 items-center'>
      <Label>{labelName}</Label>
      <InputBox type={type} required onChange={handleInputText} value={text}/>
    </div>
  )
}

export default TextNumber
