import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import TodoList from '../../component/TodoList';

ListPage.propTypes = {};

function ListPage(props) {

  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new"
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed"
    },
    {
      id: 3,
      title: "Code",
      status: "new"
    },
  ]


  const location = useLocation()
  const match = useRouteMatch();
  const history = useHistory();

  const [todoList, setTodoList] = useState(initTodoList)
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search)
    return params.status || 'all'
  })

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all')
  }, [location.search])

  const handleTodoClick = (todo, idx) => {

    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new"
    }
    setTodoList(newTodoList)
  }

  const handleShowAllClick = () => {
    const queryParams = { status: 'all' }

    history.push({
      // pathname: match.path,
      search: queryString.stringify(queryParams)
    })
  }

  const handleShowCompletedClick = () => {
    const queryParams = { status: 'completed' }

    history.push({
      // pathname: match.path,
      search: queryString.stringify(queryParams) 
    })
  }

  const handleShowNewCLick = () => {
    const queryParams = { status: 'new' }

    history.push({
      // pathname: match.path,
      search: queryString.stringify(queryParams)
    })
  }

  const renderedTOdoList = useMemo(() => {
    return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
  }, [todoList, filteredStatus]);




  return (
    <div>
      <h3>Todo List</h3>
      <TodoList onTodoClick={handleTodoClick} todoList={renderedTOdoList} />

      <div>
        <button onClick={handleShowAllClick}>Show all</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewCLick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;