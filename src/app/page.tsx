import Image from 'next/image'

import React from "react";
import Head from "@/app/UI/head/page";
import Hero from "@/app/UI/Hero/page";
import Section from "@/app/UI/section/paeg";
import Footer from './UI/footer/page';
import Feature from "@/app/UI/feature/page";
import Features from "@/app/UI/Features/page";

export default function Home() {
  return (
    <main className="">
    
    <Hero />
    <Head />
    <Feature />
    <Features />

      <Footer/>









    </main>
  )
}
