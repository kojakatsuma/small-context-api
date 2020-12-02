import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Reducer } from './reducer'
import { TodoProvider } from './TodoContext'
import { TodoList } from './TodoList'

const App = () => {
  const store = createStore(Reducer)
  return (
    <Provider store={store}>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
