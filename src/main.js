import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Resources from './components/Resources'
import Results from './components/Results'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/resources' component={Resources} />
      <Route exact path='/results' component={Results} />
    </Switch>
  </main>
)

export default Main