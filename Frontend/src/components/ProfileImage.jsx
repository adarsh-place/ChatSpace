import { useState } from "react";
import profileImg from "../assets/profile1.jpg";

export default function ProfileImage({ width, imgLink }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className={`w-${width} h-${width} rounded-full overflow-hidden relative`}>
      {/* Default image - always visible */}
      <img src={profileImg} className="absolute inset-0 w-full h-full object-cover" />
      {/* User's profile picture - only visible when loaded */}
      {imgLink && !imageError && (
        <img
          src={imgLink}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </div>
  );
}
