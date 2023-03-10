import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {

  let headerProps = {
    page: "home"
  }

  return (
    < >
      <Head>
        <title>Stanley - UI/UX Designer</title>
        <meta name="description" content="I'm Codegiyu, a Frontend React Developer. I build beautiful, fun and interactive things with code. Programmer portfolio website built with NextJS and Tailwind CSS." />
        <meta name="google-site-verification" content="mVKUksXdW1OhGyyAi4-iO8CT6zjQTo4uOK8GFwQUI8A" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="codegiyu, portfolio, react, developer, frontend" />
        <meta name="author" content="Edward-Precious Omegbu Codegiyu" />
        <meta property="og:type" content="portfolio" />
        <meta property="og:title" content="CodeGiyu - React Developer" />
        <meta property="og:description" content="I'm Codegiyu, a Frontend React Developer. I build beautiful, fun and interactive things with code. Programmer portfolio website built with NextJS and Tailwind CSS." />
        <meta property="og:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669041238/codegiyu2_caxu3o.jpg" />
        <meta property="og:url" content="https://portfolio-codegiyu.vercel.app" />
        <meta name="twitter:card" content="portfolio" />
        <meta name="twitter:title" content="CodeGiyu - React Developer" />
        <meta name="twitter:url" content="https://portfolio-codegiyu.vercel.app" />
        <meta name="twitter:site" content="@TheLonerider20" />
        <meta name="twitter:description" content="I'm Codegiyu, a Frontend React Developer. I build beautiful, fun and interactive things with code. Programmer portfolio website built with NextJS and Tailwind CSS." />
        <meta name="twitter:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669041238/codegiyu2_caxu3o.jpg" />
        <link rel="canonical" href="https://portfolio-codegiyu.vercel.app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <header className={`w-full bg-white`}>
        <ErrorBoundary>
          <Hero props={ headerProps } />
        </ErrorBoundary>
      </header>

      <main className={"w-full z-[3]"}>
        <ErrorBoundary>
          <Intro />
        </ErrorBoundary>
      </main>

      <footer className={"px-4 sm:px-8 md:px-16 lg:px-[2.5rem] xl:px-16 w-full pt-12 pb-[200px]"}>
        <ErrorBoundary>
          <Footer theme="light" />
        </ErrorBoundary>
      </footer>
    </>
  )
}
