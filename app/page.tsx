import Image from "next/image";
import { Navbar } from '../layouts/Navbar';
import { Hero } from '../sections/Hero';
import { About } from './../sections/About';
import { Project } from './../sections/Project';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Project/>
    </>
  );
}
