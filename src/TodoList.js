import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

import './TodoList.css'

const TodoList = () => {
  const initialTodos = () => {
    const todos = window.localStorage.getItem('todos') || '[]'
    return JSON.parse(todos)
  }
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = (value) => {
    const newTodo = { 
      text: value,
      completed: false
    }

    const newTodos = [...todos, newTodo]

    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className='TodoList'>
      <h1>Todo List</h1>
      <ul>
        { todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} removeTodo={removeTodo} />
        ))}
      </ul>
      <TodoForm add={addTodo} />
    </div>
  )
}

export default TodoList
