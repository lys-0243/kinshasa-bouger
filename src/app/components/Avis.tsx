"use client";
import React, { useEffect, useState } from "react";
import { BlackFont, MediumFont, RegularFont } from "../config/fonts";
import CustomForm from "./Form";
import CommentCard, { CommentCardOnePerView } from "./CommentCard";
import { commentDatas } from "./data";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Avis() {
  const [commentData, setCommentData] = useState(commentDatas);
  console.log(Math.floor(commentData.length * 0.15));
  return (
    <section
      className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg my-12 mb-28 pt-24"
      id="DonnerSonAvis"
    >
      <div className="w-2/2 space-y-3 mb-7">
        <h2 className={`${BlackFont.className} text-3xl text-bleu`}>
          Quel est votre avis ?
        </h2>
        <p className={`${RegularFont.className} text-text text-xs w-2/3`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          ea quia nostrum aliquam provident ut aliquid placeat natus illo nam,
          earum recusandae neque quo! Deserunt hic dolor repudiandae nesciunt
          aliquam.
        </p>
      </div>

      <div className=" h-[1px] bg-bleulight bg-opacity-10 mb-8"></div>

      <div className="flex items-start justify-between gap-6">
        <div className=" w-1/2">
          <CustomForm />
        </div>

        <div className="w-1/2 flex flex-col items-end ">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            modules={[Autoplay]}
            slidesPerView={1}
            className="w-full flex gap-3 items-center justify-center "
          >
            {commentData
              .slice(0, Math.floor(commentData.length * 0.15))
              .map((comment) => (
                <SwiperSlide key={comment.id}>
                  <CommentCard commentElement={comment} />
                </SwiperSlide>
              ))}
          </Swiper>

          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 3600,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full flex gap-3 items-center justify-center "
          >
            {commentData
              .slice(
                Math.floor(commentData.length * 0.15),
                Math.floor(commentData.length * 0.45)
              )
              .map((comment) => (
                <SwiperSlide key={comment.id}>
                  <CommentCardOnePerView commentElement={comment} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      <div className="flex items-start justify-between gap-6 mt-10">
        <Swiper
          autoplay={{
            delay: 3900,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          modules={[Grid, Autoplay]}
          className="w-full flex gap-3 items-center justify-center "
        >
          {commentData
            .slice(
              Math.floor(commentData.length * 0.45),
              Math.floor(commentData.length * 0.75)
            )
            .map((comment) => (
              <SwiperSlide key={comment.id}>
                <CommentCardOnePerView commentElement={comment} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="flex items-start justify-between gap-6 mt-10">
        <Swiper
          autoplay={{
            delay: 3900,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          modules={[Grid, Autoplay]}
          className="w-full flex gap-3 items-center justify-center "
        >
          {commentData
            .slice(Math.floor(commentData.length * 0.75))
            .map((comment) => (
              <SwiperSlide key={comment.id}>
                <CommentCardOnePerView commentElement={comment} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
