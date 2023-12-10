import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Members from "../pages/members";
import MembersList, { ListWrapper } from "./MembersList";

function FollowsModal(props) {
  const { modalContent, setModalContent, modalType } = props;

  return (
    <Transition.Root show={modalContent.length > 0} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        open={modalContent.length > 0}
        onClose={() => setModalContent([])}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-full overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl ">
                {modalType === "reviews" ? (
                  <div>teste</div>
                ) : (
                  <ListWrapper
                    members={modalContent.map((m) => {
                      if (modalType === "followers") return m.follower;
                      if (modalType === "following") return m.following;
                    })}
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export function DefaultProfile(props) {
  const { profile, children, showEdit = false } = props;

  const [modalContent, setModalContent] = useState([]);
  const [modalType, setModalType] = useState("");

  return (
    <>
      <FollowsModal
        modalContent={modalContent}
        setModalContent={setModalContent}
        modalType={modalType}
      />
      <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  // src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                  src={profile.avatar}
                  width="800"
                  height="800"
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div
                  className="p-3 text-center hover:cursor-pointer"
                  onClick={() => {
                    setModalType("reviews");
                    setModalContent(profile.reviews);
                  }}
                >
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {profile.reviews.length}
                  </span>
                  <span className="text-sm text-slate-400 ">Reviews</span>
                </div>
                <div
                  className="p-3 text-center hover:cursor-pointer"
                  onClick={() => {
                    setModalType("followers");
                    setModalContent(profile.followers);
                  }}
                >
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {profile.followers.length}
                  </span>
                  <span className="text-sm text-slate-400">Seguidores</span>
                </div>
                <div
                  className="p-3 text-center hover:cursor-pointer"
                  onClick={() => {
                    setModalType("following");
                    setModalContent(profile.following);
                  }}
                >
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {profile.following.length}
                  </span>
                  <span className="text-sm text-slate-400">Seguindo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {profile.name}
            </h3>
            <div className="text-center text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75">
                {profile.username}
              </i>
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Profile(props) {
  const { profile, user, followProfile } = props;

  const follows = profile.followers.some(
    (f) => f.follower.username === user.username
  );

  return (
    <DefaultProfile
      profile={profile}
      children={
        <>
          {follows ? (
            <a
              onClick={() => followProfile()}
              className="font-normal text-red-700 hover:text-red-400 hover:cursor-pointer"
              children="Deixar de Seguir"
            />
          ) : (
            <a
              onClick={() => followProfile()}
              className="font-normal text-slate-700 hover:text-slate-400 hover:cursor-pointer"
              children="Seguir"
            />
          )}
        </>
      }
    />
  );
}
