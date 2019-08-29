import React, { useState, useEffect } from 'react'

const Test = (props) => {

  const [users, setUsers] = useState('')

  const fetchUser = async (userID) => {
    try {
      const response = await fetch(`/api/users/${userID}`, { method: 'GET' })
      const data = await response.json()
      const user = data.username
      return user
    } catch (error) {
      return 'User not found'
    }
    // console.log(response.headers.get("content-type"))
    // const data = await response.text()
    // return JSON.stringify(user)
  }

  const fetchAllUsers = async () => {
    const response = await fetch('/api/users', { method: 'GET' })
    const data = await response.json()
    const users = data.map(user => user.username)
    return users
  }

  const fetchUserThoughts = async (userID) => {
    const response = await fetch(`/api/users/${userID}`, { method: 'GET' })
    const data = await response.json()
    const myThoughts = data
      .map(obj => {
        const string = obj.title + ': ' + obj.content
        return string
      })
    return myThoughts
  }

  useEffect(() => {
    switch (props.match.url) {
      case '/users':
        fetchAllUsers().then(data => { setUsers(data) })
        break
      case (`/users/${props.match.params.id}`):
        // fetchUser(props.match.params.id).then(data => { setUsers(data) })
        fetchUserThoughts(props.match.params.id).then(data => { setUsers(data) })
        break
      default:
        setUsers('Page not found')
    }
  }, [props.match.url, props.match.params.id])

  return (
    <h1>{users}</h1>
  )
}


export default Test