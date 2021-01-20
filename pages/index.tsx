import { ReactElement } from "react";
import Head from "next/head";

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello!</h1>
      </main>
    </div>
  );
}
