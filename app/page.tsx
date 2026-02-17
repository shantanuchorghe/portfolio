
import { Navbar } from '../layouts/Navbar';
import { Footer } from '../layouts/Footer';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Project } from './../sections/Project';
import { Contact } from './../sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
