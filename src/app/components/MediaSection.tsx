"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";

export default function MediaSection() {
  return (
    <section>
      <div>
        <CldVideoPlayer
          //   id="sea-turtle-color"
          width="320"
          height="240"
          src="samples/sea-turtle"
        />
      </div>
    </section>
  );
}
