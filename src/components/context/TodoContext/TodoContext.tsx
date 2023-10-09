import { FC, ReactNode, createContext } from 'react';
import { useTodo } from '@/hooks/todo';

const TodoContext = createContext({} as ReturnType<typeof useTodo>);

type Props = {
  children: ReactNode;
};

const TodoProvider: FC<Props> = ({ children }) => {
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
