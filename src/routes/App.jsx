import React from 'react';
//import { BrowserRouter, Router, Route } from 'react-router-dom';
import TodoList from '@containers/TodoList';
import TodoItem from '@components/TodoItem';
import TodoSearcher from '@components/TodoSearcher';
import NewTodo from '@components/NewTodo';
import CreateTodoButton from '@components/CreateTodoButton';
import Loading from '@components/Loading';
import TodoCount from '@components/TodoCount';
import EmptyTodos from '@components/EmptyTodos';

import '@styles/App.scss';

import useAux from '../hooks/useFunctions';

const App = () => {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const {
    search,
    completedTodos,
    totalTodos,
    searchedTodos,
    filter,
    openForm,
    setOpenForm,
    handleSearch,
    handleFilter,
    addTodo,
    completeTodo,
    deleteTodo
  } = useAux();

  React.useEffect(() => {
    setTimeout(() => {
      let data = localStorage.getItem('TodoList');
      if (!data) {
        data = [];
        localStorage.setItem('TodoList', JSON.stringify(data));
      }
      setLoading(false);
    }, 1500);
  }, [])


  return (
    <>
      {loading && <Loading />}
      {!loading && !error && !totalTodos > 0 &&
        <React.Fragment>
          <EmptyTodos />
          <CreateTodoButton setOpenForm={setOpenForm} />
        </React.Fragment>}
      {!loading && !error && totalTodos > 0 &&
        <React.Fragment>
          <TodoCount completed={completedTodos} total={totalTodos} />
          <TodoSearcher
            filter={filter}
            value={search}
            onChange={handleSearch}
            handleFilter={handleFilter}
          />
          <TodoList>
            {searchedTodos.map((todo, index) =>
              <TodoItem
                key={`todo-${index}`}
                data={todo}
                onComplete={completeTodo}
                onDelete={deleteTodo}
              />
            )}
          </TodoList>
          <CreateTodoButton setOpenForm={setOpenForm} />
        </React.Fragment>
      }
      {openForm &&
        <NewTodo setOpenForm={setOpenForm} addTodo={addTodo} />
      }
    </>
  );
}

export default App;