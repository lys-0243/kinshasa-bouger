"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Mousewheel, Pagination } from "swiper/modules";
// import { commentDatas } from "./data";
import CommentCard, { CommentCardOnePerView } from "./CommentCard";
import { RegularFont } from "../config/fonts";
import LoaderXL from "./LoaderXL";

export default function AvisSection() {
  const [commentData, setCommentData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCommentData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoaderXL />;
  }

  return (
    <section className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg my-12 mb-28 ">
      <div className="hidden md:flex md:items-start md:justify-between md:gap-6 md:mt-10">
        <Swiper
          autoplay={{
            delay: 3800,
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
            .reverse()
            // .slice(
            //   Math.floor(commentData.length * 0.45),
            //   Math.floor(commentData.length * 0.75)
            // )
            .map((comment) => (
              <SwiperSlide key={comment.id}>
                <CommentCardOnePerView commentElement={comment} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="hidden md:flex md:items-start md:justify-between md:gap-6 md:mt-10">
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
            // .slice(Math.floor(commentData.length * 0.75))
            .map((comment) => (
              <SwiperSlide key={comment.id}>
                <CommentCardOnePerView commentElement={comment} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="md:hidden px-4">
        <div>
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
              // .slice(Math.floor(commentData.length * 0.65))
              .map((comment) => (
                <SwiperSlide key={comment.id}>
                  <CommentCard commentElement={comment} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div>
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
              // .slice(
              //   Math.floor(commentData.length * 0.15),
              //   Math.floor(commentData.length * 0.65)
              // )
              .map((comment) => (
                <SwiperSlide key={comment.id}>
                  <CommentCard commentElement={comment} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
