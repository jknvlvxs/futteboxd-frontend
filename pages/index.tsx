import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Demo from "../components/Demo";
import Pricing from "../components/Pricing";
import Testimonies from "../components/Testimonies";
import Action from "../components/Action";
import Footer from "../components/Footer";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import Background from "../components/Background";
// import jwt from "jsonwebtoken";

const Home: NextPage = () => {
  const [cookies, setCookies] = useCookies(["token"]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwtToken = cookies.token;
    if (jwtToken && jwtToken !== "undefined") {
      const base64Url = jwtToken.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      const decodedToken = JSON.parse(window.atob(base64));
      setUser(decodedToken);
    }
  }, []);

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
