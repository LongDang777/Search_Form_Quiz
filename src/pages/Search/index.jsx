import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Detail from './Detail'
import ListPage from './ListPage'

export default function Search() {

  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={match.path} component={ListPage} exact/>
      <Route path={`${match.params}/detail/:id`} component={Detail} exact/>
    </Switch>
  )
}
