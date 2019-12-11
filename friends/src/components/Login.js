import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

function Login () {
  const [credentials, setCredentials] = useState 
    ({
        username: '',
        password: ''
    });
  

  const handleChange = event => {
    setCredentials ({
        ...credentials,
        [event.target.name] : event.target.value
      })
    };

  const onSubmit = event => {
    event.preventDefault()

    axiosWithAuth()
    .post('/login', this.state.credentials)
    .then (result => {
      console.log('axios post', result.data.payload)
      localStorage.setItem('token', result.data.payload)
      this.props.history.push('/protected')
    })
    .catch(error => 
      console.log(error))
  }

  return (
    <>
    <form onSubmit = {onSubmit}>
      <input 
          type = 'text'
          name = 'username'
          placeholder = 'Username'
          value = {credentials.username}
          onChange = {handleChange}
          />
          <br></br>
      <input 
          type = 'password'
          name = 'password'
          placeholder = 'Password'
          value = {credentials.password}
          onChange = {handleChange}
          />
          <br></br>
      <button> Log In </button>
    </form>
  </>
  )
}

export default Login