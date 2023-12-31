import type { NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";
import { useState } from "react";
import AboutProject from "../../components/About";
import Action from "../../components/Action";
import Background from "../../components/Background";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Landing from "../../components/Landing";
import Pricing from "../../components/Pricing";
import Testimonies from "../../components/Testimonies";
import { useAuth } from "../../context/AuthContext";

const Home: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>{`Matches • Futteboxd`}</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="h-full leading-normal text-gray-600">
        <Background />
        <Header user={user} />
        <Landing />
        <Features />
        <AboutProject />
        <Pricing />
        <Testimonies />
        <Action />
        <Footer />
      </div>
    </>
  );
};

export default Home;
