import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export default function Logout({ showPopup, setShowPopup }) {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/logout");
      localStorage.removeItem("ChatSpace");
      Cookies.remove("chatspacejwt");
      setLoading(false);
      setShowPopup(false);
      toast.success("Logged out successfully. Redirecting...");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };

  return (
    <>
      {showPopup && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure to log out ?</h3>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleLogout}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
