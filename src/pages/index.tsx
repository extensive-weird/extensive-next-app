import type { NextPage } from "next";
import Head from "next/head";

import { HomeTemp } from "views";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Extensive 7</title>
        <meta name="description" content="The best extensive project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemp />
    </div>
  );
};

export default Home;
