import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const LandingPage = (props) => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const logUser = async (event) => {
    event.preventDefault()
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    if (data.token === 'abc') {
      props.history.push(`users/${data.id}`)
      // props.history.push(`/${user.username}`)
    } else {
      setUser({ username: '', password: '' })
    }
  }

  let page
  if (props.userID) {
    page = (
      <div>
        <p>new thought</p>
        <p>my thoughts:</p>
      </div>
    )
  } else {
    page = (
      <div>
        <form action="submit" onSubmit={e => { logUser(e) }}>
          <input placeholder='username' value={user.username} onChange={e => { setUser({ ...user, username: e.target.value }) }} />
          <input placeholder='password' value={user.password} onChange={e => { setUser({ ...user, password: e.target.value }) }} />
          {/* <NavLink to="/sign-in">Sign in</NavLink> */}
          <button>Sign in</button>
          <NavLink to="/sign-up">Sign up</NavLink>
        </form>
      </div>
    )
  }
  return (
    <div>
      {page}
    </div>
  )
}

export default withRouter(LandingPage)