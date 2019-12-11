import React, {useState} from 'react'
import axiosWithAuto from '../utils/axiosWithAuth.js'

const AddFriend = () => {
  const [values, setValues] = useState('')

  const handleChange = event => {
    event.persist()
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  };

  return(
    <article
      className="friendCard"
    >
      <form>
        <h3>Add Friend</h3>
        <input
          type="text"
          name=""
          placeholder=""
          value={''}
          onChange = {handleChange}
        />
        <input
          type="text"
          name=""
          placeholder=""
          value={''}
          onChange = {handleChange}
        />
        <input
          type="text"
          name=""
          placeholder=""
          value={''}
          onChange = {handleChange}
        />
      </form>
    </article>
  )
} 

export default AddFriend