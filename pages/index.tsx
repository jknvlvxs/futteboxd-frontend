import type { NextPage } from "next";
import Head from "next/head";
import Action from "../components/Action";
import Background from "../components/Background";
import Demo from "../components/Demo";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Pricing from "../components/Pricing";
import Testimonies from "../components/Testimonies";
import { useAuth } from "../context/AuthContext";

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Futteboxd • Social football discovery.</title>
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
        <Demo />
        <Pricing />
        <Testimonies />
        <Action />
        <Footer />
      </div>
    </>
  );
};

export default Home;
