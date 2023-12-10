import type { NextPage } from "next";
import Head from "next/head";
import Action from "../../components/Action";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MembersList from "../../components/MembersList";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useRef, useState } from "react";
import Loading from "../../components/Loading";
import toastConfig from "../../util/toast.config";
import { toast } from "react-toastify";

const Members: NextPage = () => {
  const { user } = useAuth();

  const [members, setMembers] = useState([]);
  const isLoading = useRef(false);

  const fetchMembers = async () => {
    const response = await fetch("/api/members");
    const data = await response.json();

    isLoading.current = false;

    if (data.error) {
      console.error(`Ocorreu um erro: ${data.message}`);
      toast.error(`${data.message}`, toastConfig as any);
    } else {
      setMembers(data);
    }
  };

  useEffect(() => {
    isLoading.current = true;
    fetchMembers();
  }, []);

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
      <div className="h-full bg-gradient-to-br from-cyan-500 to-pink-500 brightness-100 text-gray-600">
        <Header user={user} />
        {isLoading.current || members.length == 0 ? (
          <Loading />
        ) : (
          <MembersList members={members} />
        )}
        <Footer />
      </div>
    </>
  );
};

export default Members;
