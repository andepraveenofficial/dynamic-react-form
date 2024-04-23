import React, { useRef, useState, } from 'react'
import {useDispatch} from "react-redux"
import { addForm } from '../Store/Slices/finalFormSlice'
import { v4 as uuidv4 } from 'uuid';

/* -----> Styled Components <----- */
import { InputBox } from '../StyledComponents/FormElements'

/* -----> Text Component <----- */

const Number = () => {
  const [text, setText] = useState("Label Name")
  const textInput = useRef(null)
  const dispatch = useDispatch()
  return (
    <div>
      <form  className='flex flex-col items-start gap-2' onSubmit={(e) => {
        e.preventDefault();
        setText(textInput.current.value)
        dispatch(addForm({id:uuidv4(), type:"number", label:textInput.current.value}))
      }}>
      <label htmlFor='text'>{text}</label>
      <InputBox ref={textInput} id="text" type="text" placeholder='Enter Label Name Here' required></InputBox>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  rounded-lg text-sm px-5 py-2.5 me-2 mb-2" >Add to Form</button>
      </form>
    </div>
  )
}

export default Number