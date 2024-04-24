import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, InputBox, Label, Container } from '../StyledComponents/FormElements'
import { addForm } from '../Store/Slices/finalFormSlice'
import { v4 as uuidv4 } from 'uuid'
import { selectForm } from '../Store/Slices/selectFormSlice'


const AddForm = () => {
    const selectedForm = useSelector((store) => store.selectForm.selectedForm)
    console.log(selectedForm)

    // Local State
    const [labelName, setLabelName] = useState(null)

    // Global State
    const dispatch = useDispatch();
    
    // Methods 
const handleAddFormButton = () => {
    let selectFormObject = {
        id:uuidv4(),
        type:selectedForm,
        labelName:labelName
    };

    labelName &&  dispatch(addForm(selectFormObject))
    dispatch(selectForm(""))
}

    const AddOption = () => (
        <div className='flex flex-col gap-1 items-start'>
        <Label>Add Options</Label>
        <Container>
            <InputBox required></InputBox>
            <Button>Add a Option</Button>
        </Container>
   
        </div>
    )

    const renderAddOption = () => {
        switch (selectedForm){
            case "dropdown":
                return <AddOption/>
            case "checkbox":
                return <AddOption/>
            case "radio":
                return <AddOption/>
            default:
                return ""    
        }
    }
  return (
    <div>
        <div className='flex flex-col gap-4 items-start'>
            <Label>Enter Label Name</Label>
            <InputBox onChange={(e) => {setLabelName(e.target.value)}}></InputBox>
            { renderAddOption()}
            <Button onClick={handleAddFormButton}>Add to Form</Button>
        </div>

    </div>
  )
}

export default AddForm
