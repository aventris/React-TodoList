import React from 'react';

import useLocalStorage from './useLocalStorage';

const todosList = [
  {
    text: "Hacer ejercicio",
    status: false,
    date: "2022-19-1"
  },
  {
    text: "Sacar dinero del banco",
    status: true,
    date: "2022-19-1"
  },
  {
    text: "Comprar verduras para la comida",
    status: false,
    date: "2022-19-1"
  }
]

const mapStatus = {
  'Completed': true,
  'Pending': false
}


const useFunctions = () => {
  const {
    loading,
    error,
    todos,
    updateLocalStorage
  } = useLocalStorage('TodoList', []);


  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("All");
  const [openForm, setOpenForm] = React.useState(false);

  const searchTodos = (value) => {
    return todos.filter(todo => {
      return todo.text.toLowerCase().includes(value.toLowerCase());
    })

  }

  const getFilteredTodos = (arr, value) => {
    return arr.filter(item => {
      return item.status === mapStatus[value];
    })

  }

  const completeTodo = (value) => {
    let index = todos.findIndex(todo => todo.text === value);
    let newTodos = [...todos];
    newTodos[index].status = !newTodos[index].status;
    updateLocalStorage(newTodos);
  }

  const deleteTodo = (value) => {
    let index = todos.findIndex(todo => todo.text === value);
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    updateLocalStorage(newTodos);
  }

  const addTodo = (value) => {
    let newList = [...todos, {
      text: value,
      status: false
    }];
    updateLocalStorage(newList);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const handleFilter = (value) => {
    setFilter(value)
  }


  let completedTodos = todos.filter(todo => {
    return todo.status === true;
  })
  completedTodos = completedTodos.length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  searchedTodos = searchTodos(search);

  if (filter !== 'All')
    searchedTodos = getFilteredTodos(searchedTodos, filter);
  return {
    search,
    searchedTodos,
    totalTodos,
    completedTodos,
    filter,
    openForm,
    setOpenForm,
    handleSearch,
    handleFilter,
    addTodo,
    completeTodo,
    deleteTodo
  }

}

export default useFunctions;