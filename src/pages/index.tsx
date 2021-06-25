import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import AddTodoForm from '@/components/AddTodoForm';
import TodoList from '@/components/TodoList';
import { Todo } from '@/models/Todo';
import { useTodo } from '@/hooks/todo';

const Home = () => {
  const { todoList, addTodo } = useTodo();
  return (
    <Layout>
      <main css={mainBlock}>
        <AddTodoForm addTodoFunc={addTodo} />
        <TodoList data={todoList} />
      </main>
    </Layout>
  );
};

const mainBlock = css`
  padding: 16px 0;
`;

export default Home;
