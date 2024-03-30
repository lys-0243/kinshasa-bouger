"use client";
import React, { useEffect, useState } from "react";
import { BlackFont, MediumFont, RegularFont } from "../config/fonts";
import CustomForm from "./Form";
import CommentCard, { CommentCardOnePerView } from "./CommentCard";
// import { commentDatas } from "./data";
import { Autoplay, Grid, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import LoaderXL from "./LoaderXL";

export default function Avis() {
  const [commentData, setCommentData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCommentData(data), setLoading(false);
      });
  }, []);

  return (
    <section
      className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg my-6 mb-20 mt-20 md:mt-0"
      id="DonnerSonAvis"
    >
      <div className="w-2/2 space-y-3 mb-7 px-3 text-center md:text-left">
        <h2 className={`${BlackFont.className} text-3xl text-bleu`}>
          Postez votre avis...
        </h2>
        <p
          className={`${RegularFont.className} text-text text-xs md:text-base md:w-2/3`}
        >
          Pesa avis na yo to solution oyo esengele , eloko prochain gouverneur
          il faut asala pona développement ya ville ya Kinshasa.
        </p>
      </div>

      <div className=" h-[1px] bg-bleulight bg-opacity-10 mb-8"></div>

      <div className="mx-6 md:mx-0 md:flex md:items-start md:justify-between md:gap-6">
        <div className="w-full md:w-1/2">
          <CustomForm />
        </div>

        {loading ? (
          <LoaderXL />
        ) : (
          <div className="md:w-1/2 flex flex-col items-end ">
            <Swiper
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              modules={[Autoplay]}
              slidesPerView={1}
              className="w-full flex gap-3 items-center justify-center"
            >
              {commentData
                .reverse()
                // .slice(0, Math.floor(commentData.length * 0.15))
                .map((comment, index) => (
                  <SwiperSlide key={index}>
                    <CommentCard commentElement={comment} />
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className="hidden md:w-full md:flex md:gap-3 md:items-center md:justify-center">
              <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={20}
                grabCursor={true}
                autoplay={{
                  delay: 3600,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="w-full flex gap-3 items-center justify-center"
              >
                {commentData
                  // .slice(
                  //   Math.floor(commentData.length * 0.15),
                  //   Math.floor(commentData.length * 0.45)
                  // )
                  .map((comment, index) => (
                    <SwiperSlide key={index}>
                      <CommentCardOnePerView commentElement={comment} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
