import Image from "next/image";
import { Navbar } from '../layouts/Navbar';
import { Hero } from '../sections/Hero';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  );
}
