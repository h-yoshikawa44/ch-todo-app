import { FC } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Todo app</title>
        <meta
          name="description"
          content="devChallenges.io - Todo app | by h-yoshikawa44"
        />
      </Head>
      <div css={container}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

const container = css`
  max-width: 800px;
  height: 100vh;
  padding: 0 4%;
  margin: 0 auto;
`;

export default Layout;
