import type { NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Action from "../../components/Action";
import Demo from "../../components/Demo";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Landing from "../../components/Landing";
import Pricing from "../../components/Pricing";
import Testimonies from "../../components/Testimonies";
import { Profile } from "../../types/profile.types";

const Home: NextPage = () => {
  const router = useRouter();

  const [cookies, setCookies] = useCookies(["token"]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwtToken = cookies.token;
    if (jwtToken) {
      const base64Url = jwtToken.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      const decodedToken = JSON.parse(window.atob(base64));
      setUser(decodedToken);
    }
  }, []);

  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!router.query.username) return;
    const profile: Profile = {
      email: "sada@asda,com",
      username: router.query.username as string,
    };

    setProfile(profile);
  }, [router.query.username]);

  if (!profile) return <p>Usuário não encontrado</p>;

  return (
    <>
      <Head>
        <title>{`${profile.username}'s profile • Futteboxd`}</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="h-full leading-normal text-gray-600">
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
          style={{
            backgroundImage: "url('images/splash.jpeg')",
            zIndex: -1,
          }}
        />
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
