import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/Layout';
import TodoList from '@/components/TodoList';
import Button from '@/components/common/Button';
import { useTodo } from '@/hooks/todo';

const Completed = () => {
  const { todoList, changeStatusTodo } = useTodo();

  const filterTodoList = todoList
    ? todoList.filter((todo) => {
        return todo.status === 'completed';
      })
    : [];

  return (
    <Layout>
      <main css={mainBlock}>
        <TodoList
          data={filterTodoList}
          changeStatusTodoFunc={changeStatusTodo}
        />
        <div css={deleteAllBlock}>
          <Button
            size="md"
            color="danger"
            radius="4px"
            beforeIcon={<FontAwesomeIcon icon={faTrash} />}
          >
            delete all
          </Button>
        </div>
      </main>
    </Layout>
  );
};

const mainBlock = css`
  padding: 16px 0;
`;

const deleteAllBlock = css`
  margin-top: 24px;
  text-align: right;
`;

export default Completed;
