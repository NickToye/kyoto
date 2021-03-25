import Head from 'next/head';

import Tabs from '../components/Tabs';

const tabsList = [
  { id: 1, label: 'Demographics', content: 'Historically, Kyoto was the largest city in Japan, later surpassed by Osaka and Edo (Tokyo) towards the end of the 16th century. In the pre-war years, Kyoto traded places with Kobe and Nagoya ranking as the 4th and 5th largest city. In 1947, it went back to being 3rd. By 1960 it had fallen to 5th again, and by 1990 it had fallen to 7th, in 2015 it is now 9th.' },
  { id: 2, label: 'Climate', content: 'Kyoto has a humid subtropical climate (Köppen Cfa), featuring a marked seasonal variation in temperature and precipitation. Summers are hot and humid, but winters are relatively cold with occasional snowfall. Kyotos rain season begins around the middle of June and lasts until the end of July, yielding to a hot and sunny latter half of the summer. Kyoto, along with most of the Pacific coast and central areas of Japan is prone to typhoons during September and October.' },
  { id: 3, label: 'Culture', content: 'With its 2,000 religious places – 1,600 Buddhist temples and 400 Shinto shrines, as well as palaces, gardens and architecture intact – it is one of the best preserved cities in Japan' },
  { id: 4, label: 'Economy', content: 'The key industry of Kyoto is information technology and electronics: the city is home to the headquarters of Nintendo,' },
];

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
