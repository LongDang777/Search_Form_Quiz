import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './Pages/DetailPage';
import ListPage from './Pages/ListPage';

Todo.propTypes = {};

function Todo(props) {

  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.params}/:todoId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default Todo;