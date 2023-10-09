import { FC, useContext } from 'react';
import { css } from '@emotion/react';
import AddTodoForm from '@/components/model/Todo/TodoAddForm';
import TodoList from '@/components/model/Todo/TodoList';
import { TodoContext } from '@/components/context/TodoContext';

const Active: FC = () => {
  const { todoList, addTodo, changeStatusTodo } = useContext(TodoContext);
  const filterTodoList = todoList
    ? todoList.filter((todo) => {
        return todo.status === 'active';
      })
    : [];

  return (
    <main css={mainBlock}>
      <AddTodoForm addTodoFunc={addTodo} />
      <TodoList data={filterTodoList} changeStatusTodoFunc={changeStatusTodo} />
    </main>
  );
};

const mainBlock = css`
  padding: 16px 0;
`;

export default Active;
