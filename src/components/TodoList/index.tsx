import { VFC } from 'react';
import { css } from '@emotion/react';
import TodoListItem from '@/components/TodoList/TodoListItem';
import { Todo } from '@/models/Todo';

type Props = {
  data: Todo[];
};

const TodoLlist: VFC<Props> = ({ data }) => {
  return (
    <div css={todoListBlock}>
      {data?.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            text={todo.title}
            checked={todo.status === 'completed'}
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
