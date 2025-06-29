import useOptions from "../../statemanage/useOptions.js";
import Chats from "./Chats.jsx";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";

function Left() {
  const { selectedOption } = useOptions();

  return (
    <div className="w-[35%] bg-slate-900 text-gray-300 ">
      {selectedOption === "chats" && <Chats />}
      {selectedOption === "settings" && <Settings />}
      {selectedOption === "my-profile" && <Profile />}
    </div>
  );
}

export default Left;
