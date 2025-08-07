import React from "react";

const VideoSection = () => {
  return (
    <div className="bg-gray-100 py-16 flex justify-center">
      <div className="max-w-6xl w-full px-4">
        {/* Video Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* First Video */}
          <div className="w-full">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              controls

            >
              <source src="./video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Second Video - YouTube */}
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_0S4BEJLuUg?si=dF6fFNUOcSB9Ki1K"
                title="YouTube video player"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
