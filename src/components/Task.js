import React from 'react'

function Task({ task }) {
  return (
    <label htmlFor={`task-${task.id}`}>
      <input type="checkbox" name="task" id={`task-${task.id}`} />
      {task.title}
    </label>
  )
}

export default Task
