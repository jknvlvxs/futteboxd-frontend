import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Profile from "../../components/Profile";
import { Profile as ProfileModel } from "../../types/profile.types";
import { User } from "../../types/user.types";

const Home: NextPage = () => {
  const router = useRouter();

  const [cookies, setCookies] = useCookies(["token"]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const jwtToken = cookies.token;
    if (jwtToken) {
      const base64Url = jwtToken.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      const decodedToken = JSON.parse(window.atob(base64));
      setUser(decodedToken);
    }
  }, []);

  const [profile, setProfile] = useState<ProfileModel>();

  useEffect(() => {
    if (!router.query.username) return;
    const profile: ProfileModel = {
      email: "sada@asda,com",
      username: router.query.username as string,
    };

    setProfile(profile);
  }, [router.query.username]);

  return (
    <>
      <Head>
        <title>{`${profile?.username || "user"}'s profile • Futteboxd`}</title>
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
        {!!profile && !!user && profile.username !== user.username && (
          <Profile profile={profile} />
        )}
        {!!profile && !!user && profile.username === user.username && (
          <Profile profile={profile} />
        )}
        {(!!profile || !!user) && <Loading />}
        <Footer />
      </div>
    </>
  );
};

export default Home;
