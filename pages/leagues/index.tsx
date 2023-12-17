import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Leagues from "../../components/Leagues";
import Loading from "../../components/Loading";
import { useAuth } from "../../context/AuthContext";
import toastConfig from "../../util/toast.config";

const seasons = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
  "2008",
];

const LeaguesPage: NextPage = () => {
  const { user } = useAuth();

  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const isLoading = useRef(false);

  const [selectedCountry, setSelectedCountry] = useState("Brazil");
  const [selectedSeason, setSelectedSeason] = useState("2023");

  const fetchCountries = async () => {
    const response = await fetch("/api/countries");
    const data = await response.json();

    if (data.error) {
      console.error(`Ocorreu um erro: ${data.message}`);
      toast.error(`${data.message}`, toastConfig as any);
    } else {
      setCountries(data);
    }
  };

  const fetchLeagues = async () => {
    const response = await fetch(
      `/api/leagues?country=${selectedCountry}&season=${selectedSeason}`
    );
    const data = await response.json();

    isLoading.current = false;

    if (data.error) {
      console.error(`Ocorreu um erro: ${data.message}`);
      toast.error(`${data.message}`, toastConfig as any);
    } else {
      setLeagues(data);
    }
  };

  useEffect(() => {
    if (isLoading.current) return;
    isLoading.current = true;
    fetchCountries();
    fetchLeagues();
  }, []);

  useEffect(() => {
    if (isLoading.current) return;
    isLoading.current = true;
    fetchLeagues();
  }, [selectedCountry, selectedSeason]);

  const onChangeCountry = (value: any) => {
    setSelectedCountry(value);
  };

  const onChangeSeason = (value: any) => {
    setSelectedSeason(value);
  };

  return (
    <>
      <Head>
        <title>Leagues • Futteboxd</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="h-full bg-gradient-to-br from-cyan-500 to-pink-500 brightness-100 text-gray-600">
        <Header user={user} />
        {isLoading.current || countries.length == 0 ? (
          <Loading />
        ) : (
          <div>
            <Leagues
              leagues={leagues}
              countries={countries}
              onChangeCountry={onChangeCountry}
              seasons={seasons}
              onChangeSeason={onChangeSeason}
            />
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default LeaguesPage;
