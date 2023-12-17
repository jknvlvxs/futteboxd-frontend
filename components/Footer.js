export default function Footer() {
  return (
    <footer className="pt-16 pb-12 bg-gray-900 md:pt-20 bottom-0">
      <div className="mx-auto">
        <div className="flex justify-center text-gray-400">
          <div className="grid grid-cols-2 mb-20 gap-20 md:grid-cols-4">
            <ul className="space-y-2">
              <li className="mb-4 font-semibold text-white uppercase">
                Futteboxd
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/members">Members</a>
              </li>
              {/* <li>
                <a href="/reviews">Reviews</a>
              </li> */}
            </ul>
            <ul className="space-y-2">
              <li className="mb-4 font-semibold text-white uppercase">
                Football
              </li>
              <li>
                <a href="/leagues">Leagues</a>
              </li>
              <li>
                <a href="/scores">Matches</a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="mb-4 font-semibold text-white uppercase">
                Resources
              </li>
              <li>
                <a href="https://github.com/jknvlvxs/futteboxd-frontend">
                  Github
                </a>
              </li>
              <li>
                <a href="https://github.com/jknvlvxs/futteboxd-backend">
                  Developer API
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="-mt-8 text-center text-gray-300">
          Developed by{" "}
          <a
            href="https://github.com/jknvlvxs"
            className="underline"
            children="jknvlvxs"
          />
          . &copy; Futteboxd 2023.
        </p>
      </div>
    </footer>
  );
}
