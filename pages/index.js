import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Essex Wordle</title>
        <meta name="description" content="Essex Wordle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
