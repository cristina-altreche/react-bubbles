import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'


const Login = (props) => {

  const history = useHistory()
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const handleSubmit = () => {
  axiosWithAuth()
  .post('/api/login', form)
  .then(res => {
    console.log(res)
    localStorage.setItem('token', res.data.payload)
    props.history.push('/bubblepage')
  })
  .catch(err => console.log('Error from submit', err))
}


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
        }}>
            <input
            type='text'
            name='username'
            placeholder='User name'
            value={form.name}
            onChange={(e) => {
              setForm({...form, [e.target.name]: e.target.value})
            }}
            />
            <input
            type='password'
            name='password'
            placeholder="Password"
            value={form.password}
            onChange={(e) => {
              setForm({...form, [e.target.name]: e.target.value})
            }}
            />
            <button type='submit'>Login</button>
        </form>
    </>
  );
};

export default Login;
