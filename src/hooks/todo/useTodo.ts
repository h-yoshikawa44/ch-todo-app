import { useState, useEffect } from 'react';
import { TodoStatus, Todo } from '@/models/Todo';

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
      const updateData = oldTodoList ?? [];
      return updateData.concat(data);
    });
  };

  const changeStatusTodo = (id: string, status: TodoStatus) => {
    setTodoList((oldTodoList) => {
      // ただの代入だと、useEffectの第2引数の比較（shallow equals）に引っ掛からないので、sliceでコピー
      const updateData = oldTodoList.slice();
      updateData.find((todo) => todo.id === id).status = status;
      return updateData;
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

  return { todoList, addTodo, changeStatusTodo };
};

export default useTodoList;
