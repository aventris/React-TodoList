import React from 'react';
//import { BrowserRouter, Router, Route } from 'react-router-dom';
import TodoList from '@containers/TodoList';
import TodoItem from '@components/TodoItem';
import TodoHeader from '@containers/TodoHeader';
import TodoSearcher from '@components/TodoSearcher';
import NewTodo from '@components/NewTodo';
import CreateTodoButton from '@components/CreateTodoButton';
import Loading from '@components/Loading'

import '@styles/App.scss';

const todos = [
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Ssacar dinero del banco",
    status: true,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Ssacar dinero del banco",
    status: true,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Ssacar dinero del banco",
    status: true,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Ssacar dinero del banco",
    status: true,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Ssacar dinero del banco",
    status: true,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  }, {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Ssacar dinero del banco",
    status: true,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Ssacar dinero del banco",
    status: true,
    date: "2022-19-1"
  },
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  }
]
const App = () => {
  const [toggleForm, setToggleForm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <>
      <TodoHeader />
      {loading && <Loading />}
      {!loading && !error &&
        <React.Fragment>

          <TodoSearcher />
          <TodoList>
            {todos.map((todo, index) =>
              <TodoItem key={`todo-${index}`} data={todo} />
            )}
          </TodoList>
        </React.Fragment>
      }
      {toggleForm &&
        <NewTodo />
      }
      <CreateTodoButton />
    </>
  );
}

export default App;