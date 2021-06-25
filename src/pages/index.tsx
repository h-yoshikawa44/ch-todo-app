import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import AddTodoForm from '@/components/AddTodoForm';
import TodoList from '@/components/TodoList';
import { useTodo } from '@/hooks/todo';

const Home = () => {
  const { todoList, addTodo, changeStatusTodo } = useTodo();
  return (
    <Layout>
      <main css={mainBlock}>
        <AddTodoForm addTodoFunc={addTodo} />
        <TodoList data={todoList} changeStatusTodoFunc={changeStatusTodo} />
      </main>
    </Layout>
  );
};

const mainBlock = css`
  padding: 16px 0;
`;

export default Home;
