import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import toastConfig from "../../util/toast.config";
import { League } from "../../types/league.types";
import Loading from "../../components/Loading";
import LeagueScores from "../../components/LeagueScores";

const League: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  const isLoading = useRef(true);
  const [league, setLeague] = useState<League>();

  useEffect(() => {
    const fetchLeague = async () => {
      const id = Array.isArray(router.query.id)
        ? router.query.id[0]
        : router.query.id;

      const response = await fetch(`/api/league?id=${id}`);
      const data = await response.json();

      if (data.error) {
        console.error(`Ocorreu um erro: ${data.message}`);
        toast.error(`${data.message}`, toastConfig as any);
      } else {
        setLeague(data);
        isLoading.current = false;
      }
    };

    if (router.query.id) fetchLeague();
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>
          {league ? league.name : "Futteboxd"} • Social football discovery.
        </title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="h-full bg-gradient-to-br from-cyan-500 to-pink-500 brightness-100 text-gray-600">
        <Header user={user} />
        {isLoading.current || !league ? (
          <Loading />
        ) : (
          <div>
            <LeagueScores league={league} />
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default League;
