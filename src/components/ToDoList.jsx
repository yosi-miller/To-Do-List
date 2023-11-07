import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.tasks.map(task => (
        <ToDoItem key={task} task={task} />
      ))}
    </div>
  )
}

export default ToDoList