import { VFC } from 'react';
import { css } from '@emotion/react';
import TodoInput from '@/components/AddTodoForm/TodoInput';
import Button from '@/components/common/Button';

const AddTodoForm: VFC = () => {
  return (
    <form css={addTodoForm}>
      <TodoInput fullWidth placeholder="add details" />
      <Button type="submit" size="md" color="primary" shadow>
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
