import Head from 'next/head';

interface Props {
  title: string;
}

const Seo = ({ title }: Props) => {
  return (
    <Head>
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Kmong Shop' />
      <meta property='og:site_name' content='Kmong Shop' />
      <meta property='og:description' content={`Kmong Shop | ${title}`} />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <title>Kmong Shop | {title}</title>
    </Head>
  );
};

export default Seo;
