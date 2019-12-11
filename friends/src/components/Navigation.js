import React, {useState} from 'react'


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
        <div
          className="logoutButton"
          onClick={()=>logout()}
        >
          Logout
        </div>
      ):(
        <div>
          Logging Out
        </div>
      )}
    </div>
  )
} 

export default Navigation