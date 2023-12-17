import { useRouter } from "next/router";
import { Stars } from "./Testimonies";
import Moment from "react-moment";

export function ReviewsWrapper(props) {
  const { reviews = [], setModalContent = () => {} } = props;
  const router = useRouter();

  return (
    <div className="max-w-full mx-auto">
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-70">
          {reviews.map((review) => (
            <li
              className="py-3 sm:py-4 hover:cursor-pointer text-center"
              onClick={() => {
                setModalContent([]);
                router.push(`/scores/${review.fixture.id}`);
              }}
              key={review.id}
            >
              <div className="flex items-center space-x-4 mx-auto">
                <article className="p-5 mx-auto">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-10 h-10 me-4"
                      src={review.fixture.homeTeam.logo}
                      alt=""
                    />
                    <div className="font-medium text-gray-700 mx-2">
                      <p>
                        {review.fixture.homeTeam.name}{" "}
                        {review.fixture.goalsHomeTeam}{" "}
                        {review.fixture.penalty === "-"
                          ? review.fixture.penalty
                          : `(${review.fixture.penalty})`}{" "}
                        {review.fixture.goalsHomeTeam}{" "}
                        {review.fixture.awayTeam.name}{" "}
                      </p>
                    </div>
                    <img
                      className="w-10 h-10 me-4"
                      src={review.fixture.awayTeam.logo}
                      alt=""
                    />
                  </div>
                  <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                    <Stars rating={review.rating} size="w-8 h-8" />
                  </div>
                  <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                    <p>
                      Reviewed on{" "}
                      <time datetime={review.createdAt}>
                        <Moment format="DD/MM/YYYY">{review.createdAt}</Moment>
                      </time>
                    </p>
                  </footer>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {review.text}
                  </p>
                </article>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ReviewsList(props) {
  const { reviews = [] } = props;

  return (
    <section>
      <div className="max-w-7xl mx-auto w-full">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-2xl font-semibold text-white sm:text-4xl md:text-4xl md:text-gray-800">
              Reviews
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-6 text-center mb-16 md:mt-16">
        <div className="w-5/6 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10">
          <ListWrapper reviews={reviews} />
        </div>
      </div>
    </section>
  );
}
