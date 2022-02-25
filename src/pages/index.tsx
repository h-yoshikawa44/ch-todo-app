import { Fragment } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import HomePage from '@/components/page/Home';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Todo app</title>
        <meta
          name="description"
          content={`devChallenges.io - Todo app | by h-yoshikawa44`}
        />
      </Head>
      <HomePage />
    </Fragment>
  );
};

export default Home;
