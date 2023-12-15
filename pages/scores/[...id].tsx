import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LiveScores from "../../components/LiveScores";
import Loading from "../../components/Loading";
import { useAuth } from "../../context/AuthContext";
import toastConfig from "../../util/toast.config";
import { LiveScore, Score } from "../../types/score.types";
import { useRouter } from "next/router";
import { Team } from "../../types/team.types";

const Members: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  const isLoading = useRef(false);

  const [score, setScore] = useState<Score>();

  const fetchFixures = async () => {
    const id = Array.isArray(router.query.id)
      ? router.query.id[0]
      : router.query.id;

    const response = await fetch(`/api/scores/${id}`);
    const data = await response.json();

    isLoading.current = false;

    if (data.error) {
      console.error(`Ocorreu um erro: ${data.message}`);
      toast.error(`${data.message}`, toastConfig as any);
    } else {
      setScore(data);
      isLoading.current = false;
    }
  };

  useEffect(() => {
    if (isLoading.current) return;

    if (router.query.id) {
      isLoading.current = true;
      fetchFixures();
    }
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>
          {score
            ? `${(score?.homeTeam as Team).name ?? ""} ${
                score?.final_score || score?.halftime_score || "vs."
              } ${(score?.awayTeam as Team).name ?? ""}`
            : "Partida"}{" "}
          • Futteboxd
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
        {isLoading.current || !score ? (
          <Loading />
        ) : (
          <div>{JSON.stringify(score)}</div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Members;
