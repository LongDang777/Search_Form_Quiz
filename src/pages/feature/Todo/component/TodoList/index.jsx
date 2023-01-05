import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss'

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null
}

function TodoList({ todoList, onTodoClick }) {

  const handleTodoCLick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx)
  }

  return ( 
    <ul className='todo-list'>
      {todoList.map((todo, index) => {
        const { id, title, status } = todo;
        return <li
          key={id}
          className={classNames({
            "todo-item": true,
            completed: status === "completed"
          })}
          onClick={() => handleTodoCLick(todo, index)}
        >
          {title}</li>
      })}
    </ul>
  );
}

export default TodoList;