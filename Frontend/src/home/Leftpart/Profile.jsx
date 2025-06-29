import { useAuth } from "../../context/AuthProvider.jsx";
import profileImg from "../../assets/profile1.jpg";

export default function Profile() {
  const [authUser] = useAuth();

  return (
    <>
      <h1 className="text-center font-bold text-3xl p-2 px-11 mt-3 ">
        Profile
      </h1>
      <div className="mt-12 justify-self-center flex-1 overflow-y-auto">
        <img className="w-[180px] aspect-square rounded-full" src={authUser.profilePic || profileImg} />
      </div>
      <div className="mt-10 px-5 text-sm">Your Name</div>
      <div className="mt-2 px-6 text-xl">{authUser.fullname}</div>
      <div className="mt-7 px-5 text-sm">Your Email</div>
      <div className="mt-2 px-6 text-xl">{authUser.email}</div>
    </>
  );
}
