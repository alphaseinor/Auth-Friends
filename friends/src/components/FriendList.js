import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'
import FriendCard from './FriendCard.js'


const FriendList = () => {
  const [friend, setFriend] = useState([])
  useEffect(()=>{
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(result => {
        console.log(friend)
        setFriend(result.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <section className="friendContainer">
      {friend.map(person => (
          <FriendCard
            key={person.id}
            friend={person}
          />
        ))}
    </section>
  )
}

export default FriendList