import Head from 'next/head';
import Navbar     from '../components/Navbar';
import Hero       from '../components/Hero';
import About      from '../components/About';
import Skills     from '../components/Skills';
import Experience from '../components/Experience';
import Projects   from '../components/Projects';
import Contact    from '../components/Contact';
import Footer     from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Akanksha Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Akanksha Rani — Frontend & Web Developer specialising in React, Next.js, and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
