import React, { useState } from 'react'
import { Label } from '../StyledComponents/FormElements'
import { useDispatch } from 'react-redux'
import { editForm } from '../Store/Slices/finalFormSlice'


const Checkbox = (props) => {
    const {id, labelName, addOptionList} = props.fieldDetails
    const [selectedCheckBoxes, setSelectedCheckBoxes] = useState([])

    // Global Store
    const dispatch = useDispatch()

    

    // Methods
    const handleCheckbox = (e) => {
      const checkboxValue = e.target.value;
      const isChecked = e.target.checked;
  
      if (isChecked) {
          setSelectedCheckBoxes((prev) => [...prev, checkboxValue]);
          dispatch(editForm({ uniqueId: id, value: [...selectedCheckBoxes, checkboxValue] }));
      } else {
          setSelectedCheckBoxes((prev) => prev.filter((value) => value !== checkboxValue));
          dispatch(editForm({ uniqueId: id, value: selectedCheckBoxes.filter((value) => value !== checkboxValue) }));
      }
  };
    
  return (
    <div className="flex flex-col gap-3 items-start border border-gray-300 rounded p-2 w-1/3">
        <Label>{labelName}</Label>
       {addOptionList.map((each) =>  (
       <div key={each.id}>
            <input className='mr-3' type="checkbox" id={each.id} onChange={handleCheckbox} value={each.option}/>
            <Label htmlFor={each.id}>{each.option}</Label>
        </div>
    ) )}
         
    </div>
  )
}

export default Checkbox
