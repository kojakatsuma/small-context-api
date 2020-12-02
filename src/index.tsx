import React from 'react'
import ReactDOM from 'react-dom'
import { TodoProvider } from './TodoContext'
import { TodoList } from './TodoList'

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
