import React from "react";
import { BoldFont, RegularFont } from "../config/fonts";

export default function CommentCard({ commentElement }: any) {
  return (
    <div className=" flex justify-center items-center my-4">
      <div className="bg-white customCardShadow rounded-lg w-full md:w-1/2 p-4 ">
        <div className="m-2 flex items-center justify-between ">
          <div className="flex items-center gap-x-3">
            <svg
              className="h-10 w-10 text-grayLight"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <p className={`${BoldFont.className} text-text text-sm`}>
              {commentElement.userPseudo}
            </p>
          </div>
          <p className={`${RegularFont.className} text-text text-xs`}>
            {commentElement.date}
          </p>
        </div>
        <p
          className={`${RegularFont.className} text-text text-sm text-clip overflow-hidden h-[6rem]`}
        >
          {commentElement.comment}
        </p>
      </div>
    </div>
  );
}
export function CommentCardOnePerView({ commentElement }: any) {
  return (
    <div className=" flex justify-center items-center my-4">
      <div className="bg-white customCardShadow w-full rounded-lg  p-3 ">
        <div className="m-2 flex items-center justify-between ">
          <div className="flex items-center gap-x-3">
            <svg
              className="h-10 w-10 text-grayLight"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <p className={`${BoldFont.className} text-text text-sm`}>
              {commentElement.userPseudo}
            </p>
          </div>
          <p className={`${RegularFont.className} text-text text-xs`}>
            {commentElement.date}
          </p>
        </div>
        <p
          className={`${RegularFont.className} text-text text-sm text-clip overflow-hidden h-[10rem]`}
        >
          {commentElement.comment}
        </p>
      </div>
    </div>
  );
}
