import React from "react";
import { RegularFont } from "../config/fonts";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className=" bg-bleu">
      <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg rounded-xl py-14 ">
        <div className=" flex items-center justify-center">
          <p className={`${RegularFont.className} text-white text-sm`}>
            © {year} Kaapital Communication
          </p>
        </div>
      </div>
    </footer>
  );
}
