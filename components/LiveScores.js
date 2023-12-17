import { useRouter } from "next/router";
import CountriesSelect from "./CountriesSelect";
import SeasonsSelect from "./SeasonsSelect";
import Moment from "react-moment";
import { defaultLogo } from "../types/team.types";

export default function LiveScores(props) {
  const router = useRouter();
  const { title, scores } = props;

  return (
    <section>
      <div className="max-w-7xl mx-auto w-full">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-1 md:space-y-4">
            <div className="flex items-center justify-center">
              <h1
                className="text-2xl font-semibold text-white sm:text-4xl md:text-4xl md:text-gray-800"
                children={title}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-6 text-center mb-16 md:mt-16">
        {scores.length > 0 ? (
          <div className="w-5/6 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10">
            {/* <CountriesSelect values={countries} onChange={onChangeCountry} /> */}
            {/* <SeasonsSelect values={seasons} onChange={onChangeSeason} /> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 content-center">
              {scores.map((match) => (
                <a
                  key={match.id}
                  href={`/scores/${match.id}`}
                  className="flex flex-row items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="flex flex-col items-center h-auto">
                    <img
                      className="object-cover w-12 md:w-16 rounded-t-lg m-2 rounded-none rounded-s-lg"
                      src={match.homeTeam?.logo || defaultLogo}
                      alt=""
                    />
                    <p className="mb-1">
                      {match.homeTeam.code || match.homeTeam}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {match.final_score ||
                        `${match.goalsHomeTeam || 0} - ${
                          match.goalsAwayTeam || 0
                        }`}
                    </h5>
                    {match.penalty !== "-" && (
                      <h5
                        className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                        children={`(${match.penalty})`}
                      />
                    )}
                    <h5
                      className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-600"
                      children={`${match.elapsed}'`}
                    />
                  </div>
                  <div className="flex flex-col items-center h-auto">
                    <img
                      className="object-cover w-12 md:w-16 rounded-t-lg m-2 rounded-none rounded-s-lg"
                      src={match.awayTeam?.logo || defaultLogo}
                      alt=""
                    />
                    <p className="mb-1">
                      {match.awayTeam.code || match.awayTeam}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-5/6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 py-6">
            <h1>Não foi encontrada nenhuma partida nessa data :(</h1>
          </div>
        )}
      </div>
    </section>
  );
}
