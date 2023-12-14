import type { NextPage } from "next";
import Head from "next/head";
import AboutProject from "../../components/About";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About: NextPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Members • Futteboxd</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header user={user} />
      <AboutProject />
      <Footer />
    </>
  );
};

export default About;
