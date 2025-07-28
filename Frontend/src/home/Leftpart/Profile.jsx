import { useAuth } from "../../context/AuthProvider.jsx";
import ProfileImage from "../../components/ProfileImage.jsx";

export default function Profile() {
  const [authUser] = useAuth();

  return (
    <>
      <h1 className="text-center font-bold text-3xl p-2 px-11 mt-3 text-yellow-600">
        Profile
      </h1>
      <div className="mt-8 h-44 flex flex-col items-center justify-center">
        <ProfileImage width="44" imgLink={authUser.profilePic} />
      </div>
      <div className="mt-10 px-5 text-sm text-yellow-600">Your Name</div>
      <div className="mt-2 px-6 text-xl">{authUser.fullname}</div>
      <div className="mt-7 px-5 text-sm text-yellow-600">Your Email</div>
      <div className="mt-2 px-6 text-xl">{authUser.email}</div>
    </>
  );
}
