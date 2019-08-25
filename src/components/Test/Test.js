import React, { useState, useEffect } from 'react'

const Test = (props) => {

  const [resp, setResp] = useState('')

  const fetchWelcome = async () => {
    const response = await fetch('/api', { method: 'GET' })
    // console.log(response.headers.get("content-type"))
    const data = await response.text()
    return JSON.stringify(data)
  }

  const fetchJSON = async () => {
    const response = await fetch('/api/test', { method: 'GET' })
    const data = await response.json()
    return JSON.stringify(data)
  }

  useEffect(() => {
    switch (props.match.url) {
      case '/test/all':
        fetchJSON().then(data => { setResp(data) })
        break
      case ('/test'):
        fetchWelcome().then(data => { setResp(data) })
        break
      default:
        setResp('Page not found')
    }
  })

  return (
    <h1>{resp}</h1>
  )
}


export default Test