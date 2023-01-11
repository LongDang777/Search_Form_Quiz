import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import FormMain from './FormMain'

export default function Form() {

  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={match.path} component={FormMain} exact/>
    </Switch>
  )
}
