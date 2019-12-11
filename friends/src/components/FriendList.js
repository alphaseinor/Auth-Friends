import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'

const FriendList = () => {
  const [friend, setFriend] = useState([])
 
  useEffect(()=>{
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(result => {
        console.log("friendslist", result)
        setFriend(result.data.friends)
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