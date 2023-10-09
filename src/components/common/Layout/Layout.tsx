import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import Footer from '@/components/common/Footer';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
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
