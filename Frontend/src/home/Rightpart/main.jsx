import React from "react";
import useOptions from "../../statemanage/useOptions.js";
import Chat from "./Chat.jsx";
import useSettings from "../../statemanage/useSettings";
import UpdateProfile from "./UpdateProfile.jsx";
import ChangePassword from "./ChangePassword.jsx";

function Right() {
  const { selectedOption } = useOptions();
  const { selectedSetting } = useSettings();

  return (
    <div className="w-full bg-slate-950 text-gray-300">
      <div>
        {selectedOption === "chats" && <Chat />}
        {selectedOption === "settings" && (
          <>
            {selectedSetting === "none" && <></>}
            {selectedSetting === "update-profile" && <UpdateProfile />}
            {selectedSetting === "change-password" && <ChangePassword />}
          </>
        )}
      </div>
    </div>
  );
}

export default Right;
