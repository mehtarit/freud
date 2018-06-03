import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Resources from './components/Resources'
import Results from './components/Results'
import ConversationComponent from './components/ConversationComponent/Component';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => {
  const slides = props.dynamicQuestions.map((question, index) => {
    const path = `/${index}`
    return (
      <Route
        exact
        path={path}
        key={index}
        render={() => <ConversationComponent type={question.type} prompt={question.prompt} answers={question.answers}/>}
      />
    );
  });

  return (
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/resources' component={Resources} />
        {slides}
        <Route exact path='/results' component={Results} />
      </Switch>
    </main>
  )
}

export default Main