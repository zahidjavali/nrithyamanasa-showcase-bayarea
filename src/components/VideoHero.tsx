import { useState, useEffect } from "react";

export const VideoHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Preload videos
    const video = document.createElement('video');
    video.preload = 'auto';
    video.onloadeddata = () => setIsVideoLoaded(true);
    video.onerror = () => setVideoError(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Desktop Video (>768px) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/website-poster.jpg"
        className={`hidden md:block absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadedData={() => setIsVideoLoaded(true)}
        onError={() => setVideoError(true)}
      >
        <source src="/videos/website-video.mp4" type="video/mp4" />
        <source src="/videos/website-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video (≤768px) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/mobile-poster.jpg"
        className={`md:hidden absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadedData={() => setIsVideoLoaded(true)}
        onError={() => setVideoError(true)}
      >
        <source src="/videos/mobile-video.mp4" type="video/mp4" />
        <source src="/videos/mobile-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Loading State / Poster Fallback */}
      {(!isVideoLoaded || videoError) && (
        <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-red-800 to-black animate-pulse" />
      )}

      {/* Optional Text Overlay - Customize as needed */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
        <div className="text-center text-white">
          {/* Add any overlay text here if needed */}
        </div>
      </div>
    </section>
  );
};
