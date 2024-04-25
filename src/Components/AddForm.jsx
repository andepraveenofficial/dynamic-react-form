import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, InputBox, Label, Container, StyledListItem } from '../StyledComponents/FormElements'
import { addForm } from '../Store/Slices/finalFormSlice'
import { v4 as uuidv4 } from 'uuid'
import { selectForm } from '../Store/Slices/selectFormSlice'

const AddForm = () => {
    const selectedForm = useSelector((store) => store.selectForm.selectedForm)

    // Local State
    const [labelName, setLabelName] = useState("")
    const [addOption, setAddOption] = useState("")
    const [addOptionList, setAddOptionList] = useState([]) 
    const [messageOptionName, setMessageOptionName] = useState(false)
    const [messageLabelName, setMessageLabelName] = useState(false)

    // Global State
    const dispatch = useDispatch();
    
    // Methods 
const handleAddOptionList = () => {
    
    if (addOption){
        setMessageOptionName(false)
        setAddOptionList([...addOptionList, {id:uuidv4(), option:addOption}])
        setAddOption("")
    }
    else{
        setMessageOptionName(true)
    }
}

const handleAddFormButton = () => {
    if (labelName){
        setMessageLabelName(false)
        let selectFormObject = {
            id:uuidv4(),
            type:selectedForm,
            labelName:labelName,
            addOptionList:addOptionList, 
            value:null
        };
    
        if (labelName){
            dispatch(addForm(selectFormObject))
            dispatch(selectForm(""))
        }  
        else{
                
        }
        
    }
    else{
        setMessageLabelName(true)
    }
}


const handleLabelNameChange = (e) => {

    setAddOption(e.target.value)
}


    const AddOption = () => (
       <div className='flex flex-col gap-1 items-start m-4'>
        <Label>Add Options</Label>
        <Container>
            <InputBox type="text" onChange={handleLabelNameChange} value={addOption}/>
            <Button onClick={handleAddOptionList}>Add a Option</Button>
        </Container>
        
        {messageOptionName && <p class="text-red-500 font-bold">Option Name Cannot be blank</p>}
        
            <ul className='ml-7'>
                {addOptionList.map((each) => 
                    <StyledListItem key={each.id}>{each.option}</StyledListItem>
                )}
            </ul>
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
                return null    
        }
    }
  return (
    <div>
        <div className='flex flex-col gap-4 items-start'>
            <Label>Enter Label Name</Label>
            <InputBox onChange={(e) => {setLabelName(e.target.value)}} value={labelName}></InputBox>
            {messageLabelName && <p className="text-red-500 font-bold">Option Name Cannot be blank</p>}
            { renderAddOption()}
            <Button onClick={handleAddFormButton}>Add to Form</Button>
        </div>

    </div>
  )
}

export default AddForm
