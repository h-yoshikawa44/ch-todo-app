import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import AddTodoForm from '@/components/AddTodoForm';
import TodoList from '@/components/TodoList';
import { useTodo } from '@/hooks/todo';

const Active = () => {
  const { todoList, addTodo, changeStatusTodo } = useTodo();
  const filterTodoList = todoList
    ? todoList.filter((todo) => {
        return todo.status === 'active';
      })
    : [];

  return (
    <Layout>
      <main css={mainBlock}>
        <AddTodoForm addTodoFunc={addTodo} />
        <TodoList
          data={filterTodoList}
          changeStatusTodoFunc={changeStatusTodo}
        />
      </main>
    </Layout>
  );
};

const mainBlock = css`
  padding: 16px 0;
`;

export default Active;
