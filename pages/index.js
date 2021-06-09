import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('h1.part1')} <a href='https://nextjs.org'>Next.js</a>{' '}
          {t('h1.part2')} Docker!
        </h1>

        <p className={styles.description}>
          {t('subtitle')}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Link href='/' locale={router.locale === 'en' ? 'de' : 'en'}>
          <button>{t('change-locale')}</button>
        </Link>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>{t('documentation.title')} &rarr;</h3>
            <p>{t('documentation.desc')}</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>{t('learn.title')} &rarr;</h3>
            <p>{t('learn.desc')}</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h3>{t('example.title')} &rarr;</h3>
            <p>{t('example.desc')}</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h3>{t('deploy.title')} &rarr;</h3>
            <p>{t('deploy.desc')}</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          {t('powered')}{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
