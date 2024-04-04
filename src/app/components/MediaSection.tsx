"use client";
import React from "react";
import { Player } from "video-react";
import "../video-react.css";
import { BoldFont, RegularFont } from "../config/fonts";

export default function MediaSection() {
  return (
    <section className="md:mx-10 bg-white lg:mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg m-4 md:m-0">
      <div className="my-3 space-y-2 md:space-y-4">
        <h2 className={`${BoldFont.className} text-bleu text-3xl md:text-5xl`}>
          La population l&apos;aime !
        </h2>
        <p className={`${RegularFont.className} text-text`}>Retour en images</p>
      </div>
      <div className="flex flex-col gap-4  md:mt-6 md:flex md:flex-row md:gap-6">
        <div className="md:w-1/2 ">
          <Player>
            <source src="https://res.cloudinary.com/dhttj3w2f/video/upload/v1711744192/kin/wb0qmt1dg7wughddoimk.mp4" />
          </Player>
        </div>
        <div className="md:w-1/2">
          <Player>
            <source src="https://res.cloudinary.com/dhttj3w2f/video/upload/v1711743149/kin/ccwljxtivi1o1fbgnyhs.mp4" />
          </Player>
        </div>
      </div>
    </section>
  );
}
