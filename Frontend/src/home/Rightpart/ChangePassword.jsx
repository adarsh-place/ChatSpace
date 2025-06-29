import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      oldPassword: data.oldPassword,
      newPassword: data.password,
    };

    await axios
      .patch("/api/user/changepassword", userInfo)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-900 px-10 py-5 rounded-md space-y-3 w-[460px]"
        >
          <h1 className="mb-8 text-3xl items-center text-blue-600 font-bold">
            Change Password
          </h1>

          {/*Old Password */}
          <label className="input input-bordered flex items-center gap-2 bg-slate-800">
            <input
              type="oldPassword"
              className="grow"
              placeholder="Old Password"
              {...register("oldPassword", { required: true })}
            />
          </label>
          {errors.oldPassword && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}

          {/*New Password */}
          <label className="input input-bordered flex items-center gap-2 bg-slate-800">
            <input
              type="password"
              className="grow"
              placeholder="New Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-500 text-sm font-semibold">
              This field is required
            </span>
          )}

          {/*Confirm Password */}
          <label className="input input-bordered flex items-center gap-2 bg-slate-800 ">
            <input
              type="password"
              className="grow"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: validatePasswordMatch,
              })}
            />
          </label>
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.confirmPassword.message}
            </span>
          )}

          {/* Text & Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-600 cursor-pointer w-full rounded-lg py-2 mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
