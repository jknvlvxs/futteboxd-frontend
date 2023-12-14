import type { NextPage } from "next";
import Head from "next/head";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Action from "../../components/Action";
import AboutProject from "../../components/About";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Landing from "../../components/Landing";
import Pricing from "../../components/Pricing";
import Testimonies from "../../components/Testimonies";
import { User } from "../../types/user.types";
import { useRouter } from "next/router";
import { Profile } from "../../types/profile.types";
import { useAuth } from "../../context/AuthContext";
import Background from "../../components/Background";
// import jwt from "jsonwebtoken";

const Home: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  const [username, setUsername] = useState<string>(
    router.query.username as string
  );
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const profile: Profile = {
      email: "sada@asda,com",
      username: router.query.username as string,
    };

    setProfile(profile);
  }, []);

  if (!profile) return <p>Usuário não encontrado</p>;
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
