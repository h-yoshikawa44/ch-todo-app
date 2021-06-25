import { useState, useEffect } from 'react';
import { Todo } from '@/models/Todo';

const getTodoListFromStorage = () => {
  const storageData = localStorage.getItem('todos');
  const data = storageData ? (JSON.parse(storageData) as Todo[]) : null;

  return data;
};

const setTodoListToStorage = (todoList: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todoList));
};

const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (data: Todo) => {
    setTodoList((oldTodoList) => {
      const initialData = oldTodoList ?? [];
      return initialData.concat(data);
    });
  };

  useEffect(() => {
    setTodoList(getTodoListFromStorage());
    window.addEventListener('storage', (ev: StorageEvent) => {
      setTodoList(getTodoListFromStorage());
    });
    return () => {
      window.removeEventListener('storage', (ev: StorageEvent) =>
        setTodoList(getTodoListFromStorage())
      );
    };
  }, []);

  useEffect(() => {
    setTodoListToStorage(todoList);
  }, [todoList]);

  return { todoList, addTodo };
};

export default useTodoList;
