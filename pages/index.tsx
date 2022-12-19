import type { NextPage } from "next";
import Head from "next/head";
import Company from "../components/Company";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Rohit Sahani - Web Developer & Desginer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Company */}
      <Company />
    </div>
  );
};

export default Home;
