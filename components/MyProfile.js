import { DefaultProfile } from "./Profile";

export default function MyProfile(props) {
  const { profile, signOut } = props;

  return (
    <DefaultProfile
      profile={profile}
      children={
        <>
          <a
            onClick={signOut}
            className="font-normal text-red-700 hover:text-red-400 hover:cursor-pointer"
            children="Sign out"
          />
        </>
      }
    />
  );
}
