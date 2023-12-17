import { useState } from "react";
import { toast } from "react-toastify";
import { defaultLogo } from "../types/team.types";
import Testimonies from "./Testimonies";
import toastConfig from "../util/toast.config";

const StarRatingInput = ({ size, rating, setRating }) => {
  const maxRating = 5; // Maximum rating value

  function handleStarClick(index) {
    setRating(index + 1);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex items-center align-middle justify-center">
      {[...Array(maxRating)].map((_, index) => (
        <svg
          key={index}
          className={classNames(
            rating >= index + 1
              ? "text-yellow-300 cursor-pointer"
              : "text-gray-500 cursor-pointer",
            size || "w-4 h-4"
          )}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
          onClick={() => handleStarClick(index)}
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
      {!size && (
        <>
          <p
            className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400"
            children={rating}
          />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            /
          </p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {maxRating}
          </p>
        </>
      )}
    </div>
  );
};

export default function ScoreReview(props) {
  const { score, user, setOpenLogin } = props;

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
    if (message === "") {
      toast.error("It's necessary to write a message to submit a review");
      return;
    }

    const response = await fetch("/api/review", {
      method: "POST",
      body: JSON.stringify({
        fixture: score.id,
        text: message,
        favorite: false,
        rating: rating,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.error) {
      toast.error(`${data.message}`, toastConfig);
    } else {
      toast.success(`Seu review foi escrito com sucesso`, toastConfig);
      setMessage("");
      setRating(0);
      setTimeout(() => {
        // Reload the page after 2 seconds
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className="max-w-full mx-4 md:mx-28 my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col md:flex-row px-5 py-4 justify-around">
        <div className="flex flex-col align-middle justify-center text-center">
          <img
            className="rounded-t-lg w-24 h-24 md:w-40 md:h-40 mx-auto"
            src={score.homeTeam.logo || defaultLogo}
            alt={score.homeTeam.name}
          />
          <p className="text-white text-lg mt-5">{score.homeTeam.name}</p>
        </div>
        <div className="flex flex-col justify-between mx-5 leading-normal">
          <div className="flex flex-col md:flex-row justify-center md:justify-between text-center leading-normal">
            <img
              className="rounded-t-lg w-6 h-6 md:w-12 md:h-12 mr-5  mx-auto"
              src={score.league.flag || score.league.logo || defaultLogo}
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
        <div className="flex flex-col align-middle justify-center text-center">
          <img
            className="rounded-t-lg w-24 h-24 md:w-40 md:h-40  mx-auto"
            src={score.awayTeam.logo || defaultLogo}
            alt={score.awayTeam.name}
          />
          <p className="text-white text-lg mt-5">{score.awayTeam.name}</p>
        </div>
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">Reviews</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="p-5">
        <div className="justify-center align-center py-5 align-middle text-center">
          {user ? (
            <section id="testimonies" className="py-20 bg-slate-900 rounded-md">
              <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
                <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                  <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                    <div className="inline-block px-3 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                      Write a review
                    </div>
                  </div>
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="mt-10">
                    <StarRatingInput
                      size="h-12 w-12"
                      rating={rating}
                      setRating={setRating}
                    />
                  </div>
                  <div className="mt-10">
                    {/* <button
                      type="button"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text- bg-gray-400 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
                      onClick={onSubmit}
                      children="Write review"
                    /> */}
                    <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                      <div className="space-y-2">
                        <a
                          onClick={onSubmit}
                          className="hover:cursor-pointer px-5 py-2 font-semibold text-gray-200 duration-500 ease-in-out shadow-lg hover:-translate-y-1.5 rounded-2xl md:text-xl md:px-8 md:py-3 bg-gradient-to-br to-purple-600 from-blue-500 hover:bg-gradient-to-br hover:to-blue-500 hover:from-purple-600"
                        >
                          Write review{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mb-0.5 h-7 w-7 hidden sm:inline"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <a
              onClick={() => setOpenLogin(true)}
              className="bg-white rounded-full bg-opacity-40 px-4 mb-10 text-lg text-white md:text-black shadow-sm transition-colors duration-75 group gap-[0.25em] inline-flex items-center py-1.5 hover:cursor-pointer hover:bg-opacity-90"
            >
              Sign in para escrever review
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
                />
                <path
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="origin-left transition-all duration-200 opacity-0 motion-safe:-translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </svg>
            </a>
          )}
        </div>
        <Testimonies reviews={score.reviews} />
      </div>
    </div>
  );
}
