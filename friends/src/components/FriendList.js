import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'

const FriendList = (props) => {
  const [friend, setFriend] = useState([])
  console.log('FriendList props', props)
  useEffect(()=>{
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(result => {
        console.log("friendlist", result)
        setFriend(result.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <div>
      {friend.map(person => (
        person
      ))}
    </div>
  )
}

export default FriendList