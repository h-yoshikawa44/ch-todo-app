import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import AddTodoForm from '@/components/AddTodoForm';

const Home = () => {
  return (
    <Layout>
      <main css={mainBlock}>
        <AddTodoForm />
      </main>
    </Layout>
  );
};

const mainBlock = css`
  padding: 16px 0;
`;

export default Home;
