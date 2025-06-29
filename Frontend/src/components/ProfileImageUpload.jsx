import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfileImageUpload() {
  const [authUser, setAuthUser] = useAuth();

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(authUser.profilePic);
  const [uploading, setUploading] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be under 10MB");
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a photo first!");
      return;
    }

    try {
      setUploading(true);

      const fileInfo = {
        fileType: selectedFile.type,
      };

      // getting image upload link
      const metadata = await axios
        .post("/api/user/picuploadurl", fileInfo)
        .catch((error) => {
          if (error.response) {
            toast.error("Error: " + error.response.data.error);
          }
        });
      const { uploadUrl, fileUrl } = metadata.data;

      // uploading image
      await axios.put(uploadUrl, selectedFile, {
        headers: { "Content-Type": selectedFile.type },
      });

      // updating image url in db
      await axios.post("/api/user/setpicurl", { picUrl: fileUrl });

      await setAuthUser({ ...authUser, profilePic: fileUrl });
      await localStorage.setItem(
        "ChatSpace",
        JSON.stringify({ ...authUser, profilePic: fileUrl })
      );

      toast.success("Upload complete!");
      setSelectedFile(null);

      setTimeout(function () {
        window.location.reload(false);
      }, 2000);
      
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="px-10 py-5 rounded-md text-center space-y-3 w-[500px]">
      <h2 className="text-lg font-bold mb-4 text-center">
        Change Profile Image
      </h2>

      <h4>(Click on the image to select)</h4>
      {previewUrl && (
        <div className="mb-4 flex items-center justify-center">
          <img
            src={previewUrl}
            alt="Preview"
            className="max-h-48 rounded-[50%] aspect-square cursor-pointer hover:opacity-40 transition"
            onClick={handleImageClick}
          />
        </div>
      )}

      <div className="flex items-center justify-evenly">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`px-4 py-2 rounded text-white ${
            uploading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
}
