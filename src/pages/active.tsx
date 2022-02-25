import { Fragment } from 'react';
import Head from 'next/head';
import ActivePage from '@/components/page/Active';

const Active = () => {
  return (
    <Fragment>
      <Head>
        <title>Active - Todo app</title>
        <meta
          name="description"
          content={`devChallenges.io - Todo app - Active | by h-yoshikawa44`}
        />
      </Head>
      <ActivePage />
    </Fragment>
  );
};

export default Active;
