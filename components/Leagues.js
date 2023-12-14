import CountriesSelect from "./CountriesSelect";
import SeasonsSelect from "./SeasonsSelect";

export default function Leagues(props) {
  const { countries, leagues, seasons, onChangeCountry, onChangeSeason } =
    props;

  return (
    <section>
      <div className="max-w-7xl mx-auto w-full">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-2xl font-semibold text-white sm:text-4xl md:text-4xl md:text-gray-800">
              Procure as ligas ao redor do mundo
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-6 text-center mb-16 md:mt-16">
        <div className="w-5/6 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10 h-80">
          <CountriesSelect values={countries} onChange={onChangeCountry} />
          <SeasonsSelect values={seasons} onChange={onChangeSeason} />
          <div className="mt-12">{JSON.stringify(leagues)}</div>
        </div>
      </div>
    </section>
  );
}
