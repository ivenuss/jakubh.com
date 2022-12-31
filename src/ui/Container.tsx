import React from 'react';
import Head from 'next/head';
import Nav from './Nav';
import NavTopBanner from './NavTopBanner';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { PageTransition } from './PageTransition';

const DynamicFooter = dynamic(() => import('./Footer'));

interface Meta {
  title: string;
  description: string;
  image: string;
  type: string;
  date: string;
}

interface ContainerProps {
  meta?: Partial<Meta>;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  meta: customMeta,
  children
}) => {
  const router = useRouter();
  const DOMAIN = process.env.SITE_URL;

  const meta = {
    title: 'Jakub Habrcetl / Web developer.',
    description:
      "My name is Jakub Habrcetl. I'm a web developer and graphic designer.",
    image: DOMAIN + `/static/images/banner.png`,
    type: 'website',
    ...customMeta
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${DOMAIN}${router.asPath}`} />
        <link rel="canonical" href={`${DOMAIN}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="JakubH" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content="JakubH Banner" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ijakubh" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <NavTopBanner />

      <Nav />

      <div className="relative mb-auto">
        <main className="mx-auto w-full">
          <PageTransition>{children}</PageTransition>
        </main>
      </div>

      <DynamicFooter />
    </div>
  );
};

export default Container;
