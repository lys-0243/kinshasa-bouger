import React from "react";
import { RegularFont } from "../config/fonts";

export default function LoaderXL() {
  return (
    <div className="flex items-center justify-center flex-col h-32 my-5 gap-4">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-grayLight"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-bleu animate-spin"></div>
      </div>
      <p className={`${RegularFont.className} text-text `}>
        Nous chargeons les avis des autres
      </p>
    </div>
  );
}
