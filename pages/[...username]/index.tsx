import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Profile from "../../components/Profile";
import MyProfile from "../../components/MyProfile";
import { useAuth } from "../../context/AuthContext";
import { Profile as ProfileModel } from "../../types/profile.types";
import toastConfig from "../../util/toast.config";

const Home: NextPage = () => {
  const router = useRouter();
  const { user, signOut } = useAuth();

  const [profile, setProfile] = useState<ProfileModel | null>(null);
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const fetchProfile = async () => {
    const response = await fetch(`/api/profile/${router.query.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.error) {
      console.error(`Ocorreu um erro: ${data.message}`);
      toast.error(`${data.message}`, toastConfig as any);
    } else {
      setProfile(data);
    }
  };

  useEffect(() => {
    if (!!router.query.username) fetchProfile();
  }, [router.query.username]);

  const followProfile = async (username: string) => {
    if (!user) {
      return setOpenLogin(true);
    }

    alert("Implementar followProfile");
  };

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
        <Header user={user} handleOpenModal={openLogin} />
        {profile ? (
          user ? (
            user.username === profile.username ? (
              <MyProfile profile={profile} signOut={signOut} />
            ) : (
              <Profile profile={profile} followProfile={followProfile} />
            )
          ) : (
            <Profile profile={profile} followProfile={followProfile} />
          )
        ) : (
          <Loading />
        )}
        <Footer />
      </div>
    </>
  );
};

export default Home;
