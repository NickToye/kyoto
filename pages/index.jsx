import Head from 'next/head';

import tabsList from './api/tabsList.json';
import Tabs from '../components/Tabs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyoto - Tabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs data={tabsList} />
    </>
  );
}
