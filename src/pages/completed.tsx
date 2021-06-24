import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Layout from '@/components/Layout';
import TodoList from '@/components/TodoList';
import Button from '@/components/common/Button';
import { Todo } from '@/models/Todo';

const data: Todo[] = [
  {
    title: 'test todo2',
    status: 'completed',
  },
  {
    title: 'test todo4',
    status: 'completed',
  },
];

const Completed = () => {
  return (
    <Layout>
      <main css={mainBlock}>
        <TodoList data={data} />
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
