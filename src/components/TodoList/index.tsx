import { VFC, useCallback } from 'react';
import { css } from '@emotion/react';
import TodoListItem from '@/components/TodoList/TodoListItem';
import { TodoStatus, Todo } from '@/models/Todo';

type Props = {
  data: Todo[];
  changeStatusTodoFunc: (id: string, status: TodoStatus) => void;
};

const TodoLlist: VFC<Props> = ({ data, changeStatusTodoFunc }) => {
  const handleCheckTodo = useCallback(
    (id: string) => (ev: React.ChangeEvent<HTMLInputElement>) => {
      if (ev.target.checked) {
        changeStatusTodoFunc(id, 'completed');
      } else {
        changeStatusTodoFunc(id, 'active');
      }
    },
    [changeStatusTodoFunc]
  );

  return (
    <div css={todoListBlock}>
      {data?.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            todoId={todo.id}
            text={todo.title}
            checked={todo.status === 'completed'}
            onCheck={handleCheckTodo}
          />
        );
      })}
    </div>
  );
};

const todoListBlock = css`
  padding-top: 8px;
`;

export default TodoLlist;
