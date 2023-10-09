import { FC, useState, useCallback } from 'react';
import { css } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';
import TodoInput from '@/components/common/Input';
import Button from '@/components/common/Button';
import { Todo } from '@/models/Todo';

type Props = {
  addTodoFunc: (data: Todo) => void;
};

const AddTodoForm: FC<Props> = ({ addTodoFunc }) => {
  const [todoTitle, setTodoTitle] = useState<string>('');

  const handleChangeTodoTitle = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitle(ev.target.value);
    },
    [],
  );

  const handleAddTodo = useCallback(
    (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const todoData = {
        id: uuidv4(),
        title: todoTitle,
        status: 'active',
      } as Todo;
      addTodoFunc(todoData);
      setTodoTitle('');
    },
    [todoTitle, addTodoFunc],
  );

  return (
    <form css={addTodoForm} onSubmit={handleAddTodo}>
      <TodoInput
        fullWidth
        placeholder="add details"
        value={todoTitle}
        onChange={handleChangeTodoTitle}
      />
      <Button type="submit" size="lg" color="primary" shadow>
        Add
      </Button>
    </form>
  );
};

const addTodoForm = css`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 24px;
`;

export default AddTodoForm;
