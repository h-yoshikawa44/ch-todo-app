import { VFC, useContext, useCallback } from 'react';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import TodoList from '@/components/model/Todo/TodoList';
import Button from '@/components/common/Button';
import { TodoContext } from '@/components/context/TodoContext';

const Completed: VFC = () => {
  const { todoList, changeStatusTodo, deleteTodo, deleteCompletedTodo } =
    useContext(TodoContext);

  const filterTodoList = todoList
    ? todoList.filter((todo) => {
        return todo.status === 'completed';
      })
    : [];

  const handleDeleteCompletedTodo = useCallback(() => {
    deleteCompletedTodo();
  }, [deleteCompletedTodo]);

  return (
    <main css={mainBlock}>
      <TodoList
        data={filterTodoList}
        changeStatusTodoFunc={changeStatusTodo}
        deleteTodoFunc={deleteTodo}
      />
      <div css={deleteAllBlock}>
        <Button
          size="md"
          color="danger"
          radius="4px"
          beforeIcon={<FontAwesomeIcon icon={faTrash} />}
          onClick={handleDeleteCompletedTodo}
        >
          delete all
        </Button>
      </div>
    </main>
  );
};

const mainBlock = css`
  padding: 0 0 16px;
`;

const deleteAllBlock = css`
  margin-top: 24px;
  text-align: right;
`;

export default Completed;
