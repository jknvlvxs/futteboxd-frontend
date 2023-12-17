export default function LeagueScores(props) {
  const { league = null } = props;

  if (!league) return;

  return (
    <section>
      <div className="max-w-7xl mx-auto w-full">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-1 md:space-y-4">
            <div className="flex items-center justify-center">
              <img
                src={league.logo}
                alt={`${league.name} logo`}
                className="w-16 h-16 mr-4"
              />
              <h1
                className="text-2xl font-semibold text-white sm:text-4xl md:text-4xl md:text-gray-800"
                children={league.name}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={league.flag}
                alt={`${league.country} flag`}
                className="w-8 h-8 mr-4"
              />
              <h1 className="text-xl font-bold" children={league.country} />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-bold" children={league.season} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-6 text-center mb-16 md:mt-16">
        {league.scores.length > 0 ? (
          <div className="w-5/6 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10">
            {/* <CountriesSelect values={countries} onChange={onChangeCountry} /> */}
            {/* <SeasonsSelect values={seasons} onChange={onChangeSeason} /> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 content-center">
              {league.scores.map((match) => (
                <a
                  key={match.id}
                  href={`/scores/${match.id}`}
                  className="flex flex-row items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="flex flex-col items-center h-auto">
                    <img
                      className="object-cover w-12 md:w-16 rounded-t-lg m-2 rounded-none rounded-s-lg"
                      src={match.homeTeam?.logo || league.logo}
                      alt=""
                    />
                    <p className="mb-1">
                      {match.homeTeam.code || match.homeTeam}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {match.final_score || match.halftime_score}
                    </h5>
                    {match.penalty !== "-" && (
                      <h5
                        className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                        children={`(${match.penalty})`}
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-center h-auto">
                    <img
                      className="object-cover w-12 md:w-16 rounded-t-lg m-2 rounded-none rounded-s-lg"
                      src={match.awayTeam?.logo || league.logo}
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
            <h1>No matches found for this league in the season :(</h1>
          </div>
        )}
      </div>
    </section>
  );
}
