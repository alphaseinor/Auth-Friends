import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'
import FriendCard from './FriendCard.js'
import Navigation from './Navigation.js'
import AddFriend from './AddFriend.js'

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
    <>
      <Navigation />
      <section className="friendContainer">
        <AddFriend />
        {friend.map(person => (
            <FriendCard
              key={person.id}
              friend={person}
            />
          ))}
      </section>
    </>
  )
}

export default FriendList