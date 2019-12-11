import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

const Navigation = () => {
  const [access, setAccess] = useState(localStorage.getItem('token')?true:false)
  
  const logout = () =>{
    console.log("logging out")
    localStorage.clear('token')
    setAccess(false)
    window.location.href='/'
  }



  return(
    <div>
      {access?(
        <>
          <div
            onClick={()=>logout()}
          >
            Logout
          </div>
        </>
      ):(
        <>
          <div>
            Login
          </div>
        </>
      )}
    </div>
  )
} 

export default Navigation