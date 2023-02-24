import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>imagine Gaming Play Forum</title>
        <meta name="description" content="Create/view posts made by the IGP community." />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="refresh" content="0;URL='/posts'" />    
      </Head>

    </div>
  )
}
