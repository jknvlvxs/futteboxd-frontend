import Typing from "./Typing";

export default function Landing(props) {
  const { user = null } = props;

  return (
    <section>
      <div className="max-w-3xl mx-8 md:mx-auto">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-2xl font-semibold text-white sm:text-5xl md:text-6xl md:text-gray-800">
              <Typing />
            </h1>
            <h2 className="text-lg text-gray-100 md:text-2xl md:mx-0.5 md:text-gray-600">
              Futteboxd is the social platform dedicated to football
              enthusiasts, where users share their passionate analyses and
              reviews of matches, creating a vibrant and engaged community.
            </h2>
          </div>
          {!user && (
            <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
              <div className="space-y-2">
                <a
                  href="/register"
                  className="px-5 py-2 font-semibold text-gray-200 duration-500 ease-in-out shadow-lg hover:-translate-y-1.5 rounded-2xl md:text-xl md:px-8 md:py-3 bg-gradient-to-br to-purple-600 from-blue-500 hover:bg-gradient-to-br hover:to-blue-500 hover:from-purple-600"
                >
                  Sign-up{" "}
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
          )}
        </div>
      </div>
      <div className="mt-20 space-y-6 text-center mb-28 md:mt-32">
        <h1 className="text-lg font-semibold tracking-wide text-center text-gray-100 text-opacity-75 uppercase md:mx-10 md:text-gray-600">
          Developed with the best technologies
        </h1>
        <div className="w-3/5 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10">
          <div className="flex flex-wrap items-center justify-center flex-shrink -mt-6 -ml-6 space-x-6 space-y-6">
            <img
              className="h-5 mt-6 ml-6 md:h-20"
              src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
              alt="next"
            />
            <img
              className="h-5 mt-6 ml-6 md:h-20"
              src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
              alt="tailwind"
            />
            <img
              className="h-5 mt-6 ml-6 md:h-20"
              src="https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png"
              alt="nest"
            />
            <img
              className="h-5 mt-6 ml-6 md:h-20"
              src="https://wiki.postgresql.org/images/thumb/a/a4/PostgreSQL_logo.3colors.svg/540px-PostgreSQL_logo.3colors.svg.png"
              alt="postgres"
            />
            {/* 
            <img className="h-9 md:h-6" src="images/.png" alt="" />
            <img className="h-5 md:h-8" src="images/moderna.png" alt="" />
            <img className="h-5 md:h-5" src="images/oracle.png" alt="" />
            <img className="h-5 md:h-9" src="images/honey.png" alt="" />
            <img className="h-5 md:h-8" src="images/digitalocean.svg" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
