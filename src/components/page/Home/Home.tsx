import { VFC } from 'react';
import { css } from '@emotion/react';
import AddTodoForm from '@/components/model/Todo/TodoAddForm';
import TodoList from '@/components/model/Todo/TodoList';
import { useTodo } from '@/hooks/todo';

const Home: VFC = () => {
  const { todoList, addTodo, changeStatusTodo } = useTodo();
  return (
    <main css={mainBlock}>
      <AddTodoForm addTodoFunc={addTodo} />
      <TodoList data={todoList ?? []} changeStatusTodoFunc={changeStatusTodo} />
    </main>
  );
};

const mainBlock = css`
  padding: 16px 0;
`;

export default Home;
