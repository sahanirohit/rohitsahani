import type { NextPage } from "next";
import Head from "next/head";
import Company from "../components/Company";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import WorkProcess from "../components/WorkProcess";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Rohit Sahani - Web Developer & Desginer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Company Section */}
      <Company />

      {/* Service Section */}
      <Services />

      {/* Work Process */}
      <WorkProcess />

      {/* Portfolio */}
      <Portfolio />
    </div>
  );
};

export default Home;
