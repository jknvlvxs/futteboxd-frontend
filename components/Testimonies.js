const Stars = ({ rating, size }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex items-center align-middle justify-center">
      <svg
        className={classNames(
          rating >= 1 ? "text-yellow-300" : "text-gray-500",
          size || "w-4 h-4 md:ml-2"
        )}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className={classNames(
          rating >= 2 ? "text-yellow-300" : "text-gray-500",
          size || "w-4 h-4"
        )}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className={classNames(
          rating >= 3 ? "text-yellow-300" : "text-gray-500",
          size || "w-4 h-4"
        )}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className={classNames(
          rating >= 4 ? "text-yellow-300" : "text-gray-500",
          size || "w-4 h-4"
        )}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className={classNames(
          rating == 5 ? "text-yellow-300" : "text-gray-500",
          size || "w-4 h-4"
        )}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
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
            5
          </p>
        </>
      )}
    </div>
  );
};

const Review = ({ name, position, text, photoLink, rating, favorite }) => {
  return (
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <a className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
          <div className="flex items-center space-x-4">
            <img
              src={photoLink}
              className="w-12 h-12 bg-center bg-cover border rounded-full"
              alt={name}
            />
            <div>
              <div className="flex flex-col md:flex-row">
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <Stars rating={rating} />
              </div>
              <p className="text-gray-500 text-md mt-1">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300 text-md">{text}</p>
          {/* <p className="leading-normal text-gray-600 text-md">
            {favorite && "Marked this match as favortite"}
          </p> */}
        </div>
      </a>
    </div>
  );
};

export default function Testimonies(props) {
  const { reviews = [] } = props;

  const divideArray = (arr) => {
    const result = [[], [], []];

    for (let i = 0; i < arr.length; i++) result[i % 3].push(arr[i]);

    return result;
  };

  const dividedArrays = divideArray(reviews);

  const part1 = dividedArrays[0];
  const part2 = dividedArrays[1];
  const part3 = dividedArrays[2];

  const media = reviews.reduce((acc, review) => acc + +review.rating, 0);
  const average = (media / reviews.length).toFixed(2);

  return (
    <section id="testimonies" className="py-20 bg-slate-900 rounded-md">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              <Stars rating={average} size="w-10 h-10" />
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            {part1.map((review) => (
              <li className="text-sm leading-6">
                <Review
                  name={review.profile.name}
                  position={review.profile.username}
                  text={review.text}
                  photoLink={review.profile.avatar}
                  rating={review.rating}
                  favorite={review.favorite}
                />
              </li>
            ))}
          </ul>
          <ul className="hidden space-y-8 sm:block">
            {part2.map((review) => (
              <li className="text-sm leading-6">
                <Review
                  name={review.profile.name}
                  position={review.profile.username}
                  text={review.text}
                  photoLink={review.profile.avatar}
                  rating={review.rating}
                  favorite={review.favorite}
                />
              </li>
            ))}
          </ul>
          <ul className="hidden space-y-8 lg:block">
            {part3.map((review) => (
              <li className="text-sm leading-6">
                <Review
                  name={review.profile.name}
                  position={review.profile.username}
                  text={review.text}
                  photoLink={review.profile.avatar}
                  rating={review.rating}
                  favorite={review.favorite}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
