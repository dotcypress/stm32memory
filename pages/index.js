import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🦀 STM32 memory.x generator</title>
        <meta name="description" content="Generate memory.x for your STM32 Rust project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>🦀</h1>
        <h1 className={styles.subtitle}>
          STM32 memory.x generator
        </h1>

        <p className={styles.usage}>
          <code className={styles.code}>curl https://stm32.vercel.app/api/%chip% &gt; memory.x</code>
        </p>

        <p className={styles.help}>
          List supported devices:
          <ul>
            <li><code className={styles.code}>curl https://stm32.vercel.app/api/db &#124; jq</code></li>
          </ul>

          Usage examples:
          <ul>
            <li><code className={styles.code}>curl https://stm32.vercel.app/api/stm32g030k8t6 &gt; memory.x</code></li>
            <li><code className={styles.code}>curl https://stm32.vercel.app/api/stm32g031k8tx &gt; memory.x</code></li>
            <li><code className={styles.code}>curl https://stm32.vercel.app/api/stm32f103cbu6 &gt; memory.x</code></li>
          </ul>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/dotcypress/stm32memory"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fork me on GitHub
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div >
  );
}
