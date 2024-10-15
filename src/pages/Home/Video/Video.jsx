import React from "react";

const VideoSection = () => {
  return (
    <div className="bg-gray-100 py-16 flex justify-center ">
      <div className="max-w-4xl w-full">
        {/* Video Section */}
        <video
          className="w-full h-rounded-lg shadow-lg"
          controls
    // Optional poster image for preview
        >
          <source src="./video.mp4" type="video/mp4" /> {/* Replace with actual video URL */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
