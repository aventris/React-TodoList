import React from 'react';

const useLocalStorage = (key, initValue) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [todos, setTodos] = React.useState([]);


  React.useEffect(() => {
    try {
      setError(false);
      let ls = window.localStorage.getItem(key);
      if (!ls) {
        ls = initValue
        window.localStorage.setItem(key, JSON.stringify(ls));
      } else {
        ls = JSON.parse(ls);
      }
      setLoading(false);
      setTodos(ls);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);

  const updateLocalStorage = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setTodos(value);
  }

  return {
    updateLocalStorage,
    loading,
    error,
    todos
  }
}

export default useLocalStorage;