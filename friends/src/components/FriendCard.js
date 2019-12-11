import React from 'react'

const FriendCard = (props) => {
  console.log(props)
  return(
    <article 
      id={props.id}
      className="friendCard"
    >
      <h3>{props.friend.name}</h3>
      <a href={`mailto:${props.friend.email}`}>{props.friend.email}</a>
      <p>{`${props.friend.age} years old`}</p>
    </article>
  )
}


export default FriendCard