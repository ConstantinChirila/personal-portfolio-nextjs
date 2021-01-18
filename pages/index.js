import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello!</h1>
      </main>
    </div>
  );
}
