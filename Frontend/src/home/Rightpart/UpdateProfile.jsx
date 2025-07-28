import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import ProfileImageUpload from "../../components/ProfileImageUpload";

function UpdateProfile() {
  const [authuser,setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
    };

    await axios
      .patch("/api/user/updateprofile", userInfo)
      .then((response) => {
        toast.success(response.data.message);
        localStorage.setItem("ChatSpace", JSON.stringify(response.data.user));
        setAuthUser(response.data.user);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="mt-8 text-3xl flex items-center justify-center text-yellow-600 font-bold">
          Update Profile
        </h1>

        <div className="flex flex-col h-screen items-center justify-evenly">
          <ProfileImageUpload />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-10 py-5 rounded-md space-y-3 w-[500px]"
          >
            <h2 className="text-lg font-bold mb-4 text-center">Change Name</h2>
            <div className="flex items-center justify-between">
              <label className="input input-bordered flex items-center w-72 bg-slate-800">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter new name"
                  {...register("fullname", { required: true })}
                />
              </label>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-slate-100 bg-yellow-700 hover:bg-yellow-800 cursor-pointer w-20 h-10 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
            {errors.fullname && (
              <span className="text-red-500 text-sm font-semibold">
                This field is required
              </span>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
