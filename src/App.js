import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Test from './components/Test/Test'

function App() {
  return (
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
      <Route path="/test*" component={Test} />
    </Switch>
  )
}

export default App
