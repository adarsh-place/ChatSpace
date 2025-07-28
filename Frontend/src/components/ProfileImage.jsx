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

  // Map width prop to actual Tailwind classes
  const getSizeClasses = (width) => {
    const sizeMap = {
      "12": "w-12 h-12",
      "14": "w-14 h-14",
      "16": "w-16 h-16",
      "18": "w-18 h-18",
      "20": "w-20 h-20",
      "24": "w-24 h-24",
      "32": "w-32 h-32",
      "40": "w-40 h-40",
      "44": "w-44 h-44",
      "48": "w-48 h-48"
    };
    return sizeMap[width] || "w-12 h-12";
  };

  return (
    <div className={`${getSizeClasses(width)} overflow-hidden relative rounded-full`}>
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
