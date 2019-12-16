import React from 'react'

const Todo = ({ todo, removeTodo, index }) => {
  const remove = () => {
    removeTodo(index)
  }

  return (
    <li key={index}>
      <input type='checkbox' defaultChecked={todo.completed} />
      { todo.text }
      <button onClick={remove}>Remove</button>
    </li>
  )
}

export default Todo