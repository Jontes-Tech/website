import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JontesTech</title>
        <meta name="description" content="Epic shit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Sup, I{"'"}m Jonte👋
        </h1>

        <p className={styles.description}>
        I{"'"}m a barely 13 year old tech geek who absolutely loves FOSS and Opensource culture.
        </p>

        <div className={styles.grid}>
          <a href="https://blog.jontes.page" className={styles.card}>
            <h2>Read my blog!📝 &rarr;</h2>
            <p>Where I casually guess stuff. Also on Tor.</p>
          </a>

          <a href="https://github.com/Jontes-Tech" className={styles.card}>
            <h2>Check out my Github!&rarr;</h2>
            <p>Where I post my shitty projects!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Owned by Jonte - GPL 3.0 - Few rights reserved
      </footer>
    </div>
  )
}
export default Home
