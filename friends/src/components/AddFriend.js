import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'
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
    event.preventDefault()
    axiosWithAuth()
    .post('http://localhost:5000/api/friends', friend)
    .then(result => {
      console.log(result)
      window.location.href='/'
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return(
    <article
      className="friendCard"
    >
      <h3>Add Friend</h3>
      <form
        onSubmit={e=>handleSubmit(e)}
      >
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