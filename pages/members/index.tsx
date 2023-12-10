import type { NextPage } from "next";
import Head from "next/head";
import Action from "../../components/Action";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MembersList from "../../components/MembersList";
import { useAuth } from "../../context/AuthContext";

const Members: NextPage = () => {
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
      <div className="h-full bg-gradient-to-br from-cyan-500 to-pink-500 brightness-100 leading-normal text-gray-600">
        <Header user={user} />
        <MembersList />
        <Footer />
      </div>
    </>
  );
};

export default Members;
