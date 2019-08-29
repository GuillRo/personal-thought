import React, { useState } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from './components/LandingPage/LandingPage'
import Test from './components/Test/Test'

import styles from './App.module.css'

function App() {

  const [userID, setUserID] = useState(null)

  const updateAuth = (id = null) => {
    setUserID(id)
  }

  return (
    <div className={styles.App}>
      <Switch>
        {/* Removes trailing slashes */}
        <Route
          path="/:url*(/+)"
          exact
          strict
          render={({ location }) => (
            <Redirect to={location.pathname.replace(/\/+$/, '')} />
          )} />
        {/* Removes duplicate slashes in the middle of the URL */}
        <Route
          path="/:url(.*//+.*)"
          exact
          strict
          render={({ match }) => (
            <Redirect to={`/${match.params.url.replace(/\/\/+/, '/')}`} />
          )}
        />
        <Route path="/users/:id" component={Test} />
        <Route path="/users" component={Test} />
        <Route path="/" component={(props) => <LandingPage {...props} userID={userID} updateAuth={id => { updateAuth(id) }} />} />
      </Switch>
    </div>
  )
}

export default App
