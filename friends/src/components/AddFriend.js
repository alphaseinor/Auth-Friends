import React, {useState} from 'react'
import axiosWithAuto from '../utils/axiosWithAuth.js'
import {v1} from 'uuid'

const AddFriend = () => {
  const [friend, setFriend] = useState({
    id:v1(),
    name:'',
    age:'',
    email:''
  })

  const handleChangeString = event => {
    setFriend({...friend, [event.target.name]: event.target.value})
  }

  const handleChangeAge = event => {
    setFriend({...friend, age: Number(event.target.value)})
  }

  const handleSubmit = event => {
    
  }

  return(
    <article
      className="friendCard"
    >
      <form
        onSubmit={e=>handleSubmit(e)}
      >
        <h3>Add Friend</h3>
        <input
          type="text"
          name="name"
          placeholder="Friend's Name"
          value={friend.name}
          onChange = {handleChangeString}
        />
        <input
          type="text"
          name="age"
          placeholder="Friend's Age"
          value={friend.age}
          onChange = {handleChangeAge}
        />
        <input
          type="text"
          name="email"
          placeholder="Friend's Email"
          value={friend.email}
          onChange = {handleChangeString}
        />
        <button>Add Friend</button>
      </form>
    </article>
  )
} 

export default AddFriend