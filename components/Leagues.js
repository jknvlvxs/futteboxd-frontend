import { useRouter } from "next/router";
import CountriesSelect from "./CountriesSelect";
import SeasonsSelect from "./SeasonsSelect";
import Moment from "react-moment";

export default function Leagues(props) {
  const router = useRouter();
  const {
    countries = [],
    leagues = [],
    seasons = [],
    onChangeCountry,
    onChangeSeason,
  } = props;

  return (
    <section>
      <div className="max-w-7xl mx-auto w-full">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-2xl font-semibold text-white sm:text-4xl md:text-4xl md:text-gray-800">
              Find leagues from all over the world
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-6 text-center mb-16 md:mt-16">
        <div className="w-5/6 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10">
          <CountriesSelect values={countries} onChange={onChangeCountry} />
          <SeasonsSelect values={seasons} onChange={onChangeSeason} />
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8 mt-10">
            {leagues.map((league) => (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer"
                key={league.id}
                onClick={() => {
                  router.push(`leagues/${league.id}`);
                }}
              >
                <img
                  className="h-100 mx-auto mt-1"
                  src={league.logo}
                  width={100}
                  height={100}
                  alt={`${league.name} logo`}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{league.name}</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <Moment format="DD/MM/YYYY">{league.season_start}</Moment>
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <Moment format="DD/MM/YYYY">{league.season_end}</Moment>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
