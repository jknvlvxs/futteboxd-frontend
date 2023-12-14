import { useRouter } from "next/router";

export function ListWrapper(props) {
  const { members, setModalContent = () => {} } = props;
  const router = useRouter();

  return (
    <div className="max-w-full mx-auto">
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-70">
          {members.map((member) => (
            <li
              className="py-3 sm:py-4 hover:cursor-pointer"
              onClick={() => {
                setModalContent([]);
                router.push(member.username);
              }}
              key={member.id}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="ml-5 w-24 h-24 rounded-full"
                    src={member.avatar}
                    alt={`${member.username} image`}
                  />
                </div>
                <div className="flex-1 min-w-1 ">
                  <p
                    className="text-sm font-medium text-gray-800 truncate"
                    children={member.name}
                  />
                  <p
                    className="text-sm text-gray-800 truncate"
                    children={member.username}
                  />
                </div>
                {member.reviews && (
                  <div className="flex-1 min-w-1 hidden lg:block md:block">
                    <p
                      className="text-sm font-medium text-gray-800 truncate"
                      children={member.reviews.length}
                    />
                    <p
                      className="text-sm text-gray-800 truncate"
                      children="Reviews"
                    />
                  </div>
                )}
                {member.followers && (
                  <div className="flex-1 min-w-1 hidden lg:block md:block">
                    <p
                      className="text-sm font-medium text-gray-800 truncate"
                      children={member.followers.length}
                    />
                    <p
                      className="text-sm text-gray-800 truncate"
                      children="Seguidores"
                    />
                  </div>
                )}
                {member.following && (
                  <div className="flex-1 min-w-1 hidden lg:block md:block">
                    <p
                      className="text-sm font-medium text-gray-800 truncate"
                      children={member.following.length}
                    />
                    <p
                      className="text-sm text-gray-800 truncate"
                      children="Seguindo"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MembersList(props) {
  const { members } = props;

  return (
    <section>
      <div className="max-w-7xl mx-auto w-full">
        <div className="my-20 space-y-10 text-center sm:my-16 md:space-y-14">
          <div className="space-y-5 md:space-y-8">
            <h1 className="text-2xl font-semibold text-white sm:text-4xl md:text-4xl md:text-gray-800">
              Amantes de futebol, críticos e amigos — veja nossa comunidade.
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-6 text-center mb-16 md:mt-16">
        <div className="w-5/6 p-6 mx-auto bg-gray-100 rounded-2xl bg-opacity-70 md:bg-opacity-100 md:p-10">
          <ListWrapper members={members} />
        </div>
      </div>
    </section>
  );
}
