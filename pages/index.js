import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          {t('h1.part1')}{' '}
          <a href='https://nextjs.org' className='text-blue-600'>
            Next.js
          </a>{' '}
          {t('h1.part2')} Docker!
        </h1>

        <p className='my-4 text-2xl'>
          {t('subtitle')}{' '}
          <code className='p-2 font-mono text-lg bg-gray-100 rounded-md'>
            pages/index.js
          </code>
        </p>

        <Link href='/' locale={router.locale === 'en' ? 'de' : 'en'}>
          <a className='p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white outline-none border-none'>
            {t('change-locale')}
          </a>
        </Link>

        <div className='flex flex-wrap justify-around max-w-4xl mt-6 sm:w-full'>
          <a
            href='https://nextjs.org/docs'
            className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>
              {t('documentation.title')} &rarr;
            </h3>
            <p className='mt-4 text-xl'>{t('documentation.desc')}</p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>{t('learn.title')} &rarr;</h3>
            <p className='mt-4 text-xl'>{t('learn.desc')}</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>{t('example.title')} &rarr;</h3>
            <p className='mt-4 text-xl'>{t('example.desc')}</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
          >
            <h3 className='text-2xl font-bold'>{t('deploy.title')} &rarr;</h3>
            <p className='mt-4 text-xl'>{t('deploy.desc')}</p>
          </a>
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-12 border-t'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center'
        >
          {t('powered')}{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
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
