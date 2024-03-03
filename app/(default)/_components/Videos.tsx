"use client";

import { Video } from "@/types/video";

export default function Videos({ videos }: { videos: Video[] }) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-10 md:py-4 lg:py-4">
        <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
          {videos.map((video: Video, idx: number) => {
            return (
              <div key={idx}>
                  <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-black shadow-lg bg-gray-900 text-white p-4">
                    <video
                      className="video w-full cursor-pointer rounded-md"
                      src={video.videoUrl}
                      preload="auto"
                      muted
                      loop
                      controls
                      autoPlay
                    >
                      Your browser does not support the video tag.
                    </video>

                    <p className="mb-4 text-md text-white">
                      {video.prompt}
                    </p>

                    <div className="flex items-center">
                      <div className="flex-1"></div>

                      <p className="text-slate-500 text-sm"></p>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

