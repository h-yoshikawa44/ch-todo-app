import { FC, createContext } from 'react';
import { useTodo } from '@/hooks/todo';

const TodoContext = createContext({} as ReturnType<typeof useTodo>);

const TodoProvider: FC = ({ children }) => {
  const {
    todoList,
    addTodo,
    changeStatusTodo,
    deleteTodo,
    deleteCompletedTodo,
  } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTodo,
        changeStatusTodo,
        deleteTodo,
        deleteCompletedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
