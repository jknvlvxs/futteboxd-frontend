import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SignUp from "../../components/SignUp";
import Background from "../../components/Background";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Futteboxd - Cadastre-se</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="h-full leading-normal text-gray-600">
        <Background />
        <Header />
        <SignUp />
        {/* <Action /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
