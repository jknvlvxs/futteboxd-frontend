import Typing from "./Typing";

export default function AboutProject() {
  return (
    <section id="demo" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              Sobre nós
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              <Typing />
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
              O Espaço Definitivo para Amantes do Futebol!
            </p>
            <p className="mt-4 text-lg font-normal lg:max-w-3xl mx-auto">
              Seja você um apaixonado por futebol ou apenas alguém que aprecia
              uma boa partida, este é o lugar certo para você! Aqui, no
              Futteboxd, estamos empenhados em criar uma comunidade vibrante e
              que compartilha seu entusiasmo pelo esporte mais popular do mundo.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Tecnologias
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Desenvolvido com Next.js & TailwindCSS
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl text-justify">
          O lado visual foi desenvolvido em Next.js, um framework React que não
          apenas oferece ótimo desempenho, mas também permite uma experiência de
          desenvolvimento ágil e modular. Para a estilização, escolhemos o
          Tailwind CSS, uma abordagem moderna para o design de interfaces. A
          simplicidade e flexibilidade do Tailwind CSS nos permitem criar
          componentes visuais otimizados, garantindo uma experiência estética e
          intuitiva para todos os usuários.
        </p>
        <img
          src="images/product.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Backend</h3>
              <p className="mt-1 text-gray-800 text-md text-justify">
                Nos backend, foi utilizado o framework Nest.js. Inspirado no
                Angular, o Nest.js oferece uma arquitetura modular e escalável,
                facilitando a construção de APIs robustas e eficientes. Com essa
                escolha, garantimos um ambiente de desenvolvimento estruturado e
                organizado. O banco de dados PostgreSQL foi escolhido para
                armazenar e gerenciar os dados.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">API</h3>
              <p className="mt-1 text-gray-800 text-md text-justify">
                Para fornecer as informações mais precisas e atualizadas sobre
                partidas, jogadores e equipes, utilizamos a API-FOOTBALL via
                RapidApi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Motivação
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Ideia inicial
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl text-justify">
          A ideia desse aplicativo surgiu a partir de brincadeiras no Twitter
          durante partidas de futebol. Uma delas, dizia que "deviam criar um
          Letterboxd pra jogo de futebol". Outro fato convergente é o uso de
          memes como o Martin Scorsese dizendo "Absolute Cinema" em momentos que
          grandes partidas acontecem
        </p>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          Necessidade
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl text-justify">
          Este site é o resultado do trabalho desenvolvido para a disciplina INF
          321 - Projeto e Desenvolvimento de SIstemas para a Web, do curso de
          Ciência da Computação da Universidade Federal de Viçosa (UFV). Nosso
          objetivo é ir além das fronteiras acadêmicas, trazendo a você uma
          plataforma única dedicada ao mundo do futebol.
        </p>
        <img
          src="images/product.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
          Junte-se a nossa comunidade
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">
          O que você pode esperar
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
          Estamos entusiasmados em ter você a bordo enquanto construímos este
          espaço dedicado ao futebol. Seja para avaliar seus times favoritos ou
          simplesmente compartilhar suas opiniões, Futteboxd é o seu lugar para
          mergulhar no fascinante mundo do futebol. Obrigado por fazer parte da
          nossa jornada.
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Reviews de Partidas
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Análises aprofundadas e perspicazes de partidas recentes,
                escritas por membros apaixonados da nossa comunidade.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Interação Social
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Comente, compartilhe e discuta partidas com outros fãs,
                construindo laços e amizades ao redor do amor pelo futebol.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-emerald-200 bg-opacity-30 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Perfil Personalizado
              </h3>
              <p className="mt-1 text-gray-800 text-md">
                Crie seu perfil exclusivo, registre suas partidas favoritas e
                compartilhe suas próprias análises com o mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
