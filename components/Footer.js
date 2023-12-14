export default function Footer() {
  return (
    <footer className="pt-16 pb-12 bg-gray-900 md:pt-20 bottom-0">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="flex justify-center text-gray-400">
          <div className="grid grid-cols-2 gap-8 mb-20 md:gap-28 md:grid-cols-4">
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                Futteboxd
              </li>
              <li>
                <a href="/about">Sobre</a>
              </li>
              <li>
                <a href="/members">Membros</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                Futebol
              </li>
              <li>
                <a href="/leagues">Ligas</a>
              </li>
              <li>
                <a href="/scores">Partidas</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                Support
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Slack</a>
              </li>
              <li>
                <a href="#">System Status</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                Recursos
              </li>
              <li>
                <a href="https://github.com/jknvlvxs/futteboxd-frontend">
                  Repositório
                </a>
              </li>
              <li>
                <a href="#">Developer API</a>
              </li>
              <li>
                <a href="#">Ajuda</a>
              </li>
              <li>
                <a href="#">Segurança</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="-mt-8 text-center text-gray-300">
          Feito por{" "}
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
