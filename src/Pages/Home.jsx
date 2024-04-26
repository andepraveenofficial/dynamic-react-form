/* -----> Tird Party Packages <----- */
import React from 'react'

/* -----> Global State <----- */
import { useSelector } from 'react-redux'

/* -----> External Components <----- */
import Dropdown from '../Components/Dropdown'
import AddForm from '../Components/AddForm'
import DynamicForm from '../Components/DynamicForm'
import { Button } from '../StyledComponents/FormElements'
import { signOut } from 'firebase/auth'
import { auth } from '../Authentication/firebase'

const Home = () => {
  const selectedForm = useSelector((store) => store.selectForm.selectedForm)

  // Global State 
  const checkConsole = useSelector((state) => state.checkConsole)

  // Logout Handle
  const googleAuthLogout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("SignOut")
    }).catch((error) => {
        // An error happened.
    });
}

  return (
    <div className='m-5 flex flex-row justify-around'>

      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl text-center text-cyan-500 font-bold mt-8 mb-4'>React Dynamic Forms</h1>
        <Dropdown/>
        {selectedForm != "" && <AddForm/>}

        <div>
          <Button style={{backgroundColor:"red"}} onClick={googleAuthLogout}>Logout</Button>
        </div>
      </div>
   

    <div className='shadow-lg rounded'>
    
      <div>
        <DynamicForm/>
      </div>
      
      <div>
        {checkConsole && <h1 className="text-red-500 font-bold">Check Console for Form Data</h1>}
      </div>

 

      </div>
    </div>
  )
}

export default Home
