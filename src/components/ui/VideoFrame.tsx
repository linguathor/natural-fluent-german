"use client";

import { useState } from "react";

interface VideoFrameProps {
  src: string;
  poster?: string;
  alt?: string;
}

export default function VideoFrame({ src, poster, alt }: VideoFrameProps) {
  const [playing, setPlaying] = useState(false);
  const hasSource = src && src.length > 0;

  // Detect if it's an embed URL (YouTube/Vimeo) vs local file
  const isEmbed =
    hasSource &&
    (src.includes("youtube") ||
      src.includes("youtu.be") ||
      src.includes("vimeo"));

  if (!hasSource) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-stone-200 flex items-center justify-center">
        <div className="text-center text-stone-400 p-6">
          <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-stone-300 flex items-center justify-center">
            <svg
              className="h-8 w-8 text-stone-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-sm font-medium">
            {alt || "TODO: Video hier einfügen"}
          </p>
        </div>
      </div>
    );
  }

  if (isEmbed) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
        <iframe
          src={src}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={alt || "Video"}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-stone-900">
      {!playing && poster ? (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group"
          aria-label="Video abspielen"
        >
          <img
            src={poster}
            alt={alt || ""}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <svg
              className="h-8 w-8 text-emerald-700 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      ) : null}
      {(playing || !poster) && (
        <video
          src={src}
          controls
          autoPlay={playing}
          className="h-full w-full object-cover"
        >
          <track kind="captions" />
        </video>
      )}
    </div>
  );
}
