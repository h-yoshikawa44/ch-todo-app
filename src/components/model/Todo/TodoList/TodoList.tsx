import { FC, useCallback } from 'react';
import { css } from '@emotion/react';
import TodoListItem from '@/components/model/Todo/TodoListItem';
import { TodoStatus, Todo } from '@/models/Todo';

type Props = {
  data?: Todo[];
  changeStatusTodoFunc: (id: string, status: TodoStatus) => void;
  deleteTodoFunc?: (id: string) => void;
};

const TodoLlist: FC<Props> = ({
  data,
  changeStatusTodoFunc,
  deleteTodoFunc,
}) => {
  const handleCheckTodo = useCallback(
    (id: string) => (ev: React.ChangeEvent<HTMLInputElement>) => {
      if (ev.target.checked) {
        changeStatusTodoFunc(id, 'completed');
      } else {
        changeStatusTodoFunc(id, 'active');
      }
    },
    [changeStatusTodoFunc],
  );

  const handleDeleteTodo = useCallback(
    (id: string) => {
      if (deleteTodoFunc) {
        deleteTodoFunc(id);
      }
    },
    [deleteTodoFunc],
  );

  return (
    <ul css={todoListBlock}>
      {data?.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            todoId={todo.id}
            text={todo.title}
            checked={todo.status === 'completed'}
            onCheck={handleCheckTodo}
            onDelete={deleteTodoFunc ? handleDeleteTodo : undefined}
          />
        );
      })}
    </ul>
  );
};

const todoListBlock = css`
  padding-inline-start: 0;
  list-style-type: none;
`;

export default TodoLlist;
