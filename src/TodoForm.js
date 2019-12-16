import React from 'react'

const TodoForm = ({ add }) => {
  const onKeyUp = event => {
    if (event.key === 'Enter') { 
      add(event.target.value) 
      event.target.value = ''
    }
  }

  return (
    <input 
      type='text' 
      placeholder='New todo' 
      onKeyUp={onKeyUp} />
  )
}

export default TodoForm