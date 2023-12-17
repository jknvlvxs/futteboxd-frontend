import Typing from "./Typing";

export default function AboutProject() {
  return (
    <section id="demo" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              About Us
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              <Typing />
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
              The Ultimate Space for Football Enthusiasts!
            </p>
            <p className="mt-4 text-lg font-normal lg:max-w-3xl mx-auto">
              Whether you're a passionate football fan or someone who enjoys a
              good match, this is the right place for you! Here at Futteboxd, we
              are committed to creating a vibrant community that shares its
              enthusiasm for the world's most popular sport.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Technologies
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Developed with Next.js & TailwindCSS
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl text-justify">
          The visual side was developed in Next.js, a React framework that not
          only offers excellent performance but also allows for an agile and
          modular development experience. For styling, we chose Tailwind CSS, a
          modern approach to interface design. The simplicity and flexibility of
          Tailwind CSS allow us to create optimized visual components, ensuring
          an aesthetic and intuitive experience for all users. Using this{" "}
          <a href="https://uranium.saurish.com" target="_blank">
            Template
          </a>
        </p>
        <img
          src="Template.png"
          className="mt-8 rounded-xl"
          alt="Uranium by Saurish template"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Backend</h3>
              <p className="mt-1 text-gray-800 text-md text-justify">
                For the backend, the Nest.js framework was used. Inspired by
                Angular, Nest.js offers a modular and scalable architecture,
                making it easy to build robust and efficient APIs. With this
                choice, we ensure a structured and organized development
                environment. PostgreSQL was chosen as the database to store and
                manage the data.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">API</h3>
              <p className="mt-1 text-gray-800 text-md text-justify">
                To provide the most accurate and up-to-date information about
                matches, players, and teams, we use the API-FOOTBALL via
                RapidApi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Motivation
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Initial Idea
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl text-justify">
          The idea for this application arose from Twitter banter during
          football matches. One of them suggested that they "should create a
          Letterboxd for football games." Another converging factor is the use
          of memes, such as Martin Scorsese saying "Absolute Cinema" during
          moments when great matches happen.
        </p>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Need
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl text-justify">
          This site is the result of work developed for the INF 321 - Project
          and Development of Systems for the Web course, part of the Computer
          Science program at the Federal University of Viçosa (UFV). Our goal is
          to go beyond academic boundaries, bringing you a unique platform
          dedicated to the world of football.
        </p>
        <img
          src="https://www.ufv.br/wp-content/uploads/2018/04/IMG_4792_t_1000px.jpg"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Join Our Community
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          What You Can Expect
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          We are excited to have you on board as we build this space dedicated
          to football. Whether it's to evaluate your favorite teams or simply
          share your opinions, Futteboxd is your place to dive into the
          fascinating world of football. Thank you for being part of our
          journey.
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Match Reviews
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                In-depth and insightful analyses of recent matches, written by
                passionate members of our community.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Social Interaction
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Comment, share, and discuss matches with other fans, building
                connections and friendships around the love for football.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Customized Profile
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Create your unique profile, record your favorite matches, and
                share your own analyses with the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
