import { Fragment } from 'react';
import Head from 'next/head';
import CompletedPage from '@/components/page/Completed';

const Completed = () => {
  return (
    <Fragment>
      <Head>
        <title>Completed - Todo app</title>
        <meta
          name="description"
          content={`devChallenges.io - Todo app - Completed | by h-yoshikawa44`}
        />
      </Head>
      <CompletedPage />
    </Fragment>
  );
};

export default Completed;
