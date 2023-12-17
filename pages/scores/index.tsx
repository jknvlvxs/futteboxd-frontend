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
import { LiveScore } from "../../types/score.types";

const Members: NextPage = () => {
  const { user } = useAuth();

  const isLoading = useRef(false);

  const [scores, setScores] = useState<LiveScore>();

  const fetchFixures = async () => {
    const response = await fetch(`/api/live-score`);
    const data = await response.json();

    isLoading.current = false;

    if (data.error) {
      console.error(`Ocorreu um erro: ${data.message}`);
      toast.error(`${data.message}`, toastConfig as any);
    } else {
      setScores(data);
      isLoading.current = false;
    }
  };

  useEffect(() => {
    if (isLoading.current) return;
    isLoading.current = true;
    fetchFixures();
  }, []);

  return (
    <>
      <Head>
        <title>Matches • Futteboxd</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="h-full bg-gradient-to-br from-cyan-500 to-pink-500 brightness-100 text-gray-600">
        <Header user={user} />
        {isLoading.current || !scores ? (
          <Loading />
        ) : (
          <div>
            <LiveScores title="Live Scores" scores={scores.live} />
            <LiveScores title="Today Matches" scores={scores.today} />
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Members;
