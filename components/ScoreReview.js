import { defaultLogo } from "../types/team.types";
import Testimonies from "./Testimonies";

export default function ScoreReview(props) {
  const { score, user, setOpenLogin } = props;

  return (
    <div className="max-w-full mx-4 md:mx-28 my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row px-5 py-4 justify-around">
        <img
          className="rounded-t-lg w-24 h-24 md:w-40 md:h-40"
          src={score.homeTeam.logo || defaultLogo}
          alt=""
        />
        <div className="flex flex-col justify-between mx-5 leading-normal">
          <div className="flex flex-col md:flex-row justify-center md:justify-between text-center leading-normal">
            <img
              className="rounded-t-lg w-6 h-6 md:w-12 md:h-12 mr-5"
              src={score.league.flag || defaultLogo}
              alt=""
            />
            <h5 className="mt-2 text-sm md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {score.league.name} - {score.league.season}
            </h5>
          </div>
          <div className="flex flex-row justify-center leading-normal">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {score.round}
            </h5>
          </div>
          <div className="flex flex-row justify-center leading-normal">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {score.status}
            </h5>
          </div>
          <div className="flex flex-row justify-center leading-normal">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {score.final_score || score.half_time_score}
            </h5>
          </div>
          {score.penalty !== "-" && (
            <div className="flex flex-row justify-center leading-normal">
              <h5
                className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                children={`(${score.penalty})`}
              />
            </div>
          )}
        </div>
        <img
          className="rounded-t-lg w-24 h-24 md:w-40 md:h-40"
          src={score.awayTeam.logo || defaultLogo}
          alt=""
        />
      </div>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-gray-400">Reviews</span>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="p-5">
        <div className="bg-red-500 justify-center align-center">
          {user ? (
            <div>
              <p>Escrever review</p>
            </div>
          ) : (
            <a
              onClick={() => setOpenLogin(true)}
              className="bg-white rounded-full bg-opacity-40 px-4 mb-10 text-lg text-white md:text-black shadow-sm transition-colors duration-75 group gap-[0.25em] inline-flex items-center py-1.5 hover:cursor-pointer hover:bg-opacity-90"
            >
              Entrar para escrever review
              <svg
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative transition-transform duration-200 motion-safe:-translate-x-1 group-hover:translate-x-0"
              >
                <path
                  fill="currentColor"
                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                ></path>
                <path
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="origin-left transition-all duration-200 opacity-0 motion-safe:-translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                ></path>
              </svg>
            </a>
          )}
        </div>
        <Testimonies />
      </div>
    </div>
  );
}
