"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";

const slides = [
  {
    title: "Kinshasa doit bouger",
    underTitle: "Que veux-tu voir changer ?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic optio ducimus voluptas illo ipsa in beatae veritatis eius cupiditate reiciendis ea, ad porro dolores id! Ipsum dolores fugit numquam.",
  },
  {
    title: "Kinshasa faut ebonga",
    underTitle: "Eloko nini faut é changer ?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic optio ducimus voluptas illo ipsa in beatae veritatis eius cupiditate reiciendis ea, ad porro dolores id! Ipsum dolores fugit numquam.",
  },
  {
    title: "Kinshasa, capitale du monde",
    underTitle: "Nini eza malamu pona yo ?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic optio ducimus voluptas illo ipsa in beatae veritatis eius cupiditate reiciendis ea, ad porro dolores id! Ipsum dolores fugit numquam.",
  },
];

const gouvImages = [
  {
    src: "/img/gouv/gouv1.png",
    alt: "Gouverneur01",
  },
  {
    src: "/img/gouv/gouv11.png",
    alt: "Gouverneur02",
  },
  {
    src: "/img/gouv/gouv111.png",
    alt: "Gouverneur03",
  },
];

export default function HeroSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section
      className="bg-[url('/img/hero-bg2.png')] bg-cover bg-no-repeat "
      id="Accueil"
    >
      <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg pb-24 pt-4 space-y-12 ">
        <div className="flex justify-between items-center">
          <Image
            src="/img/kin-logo.png"
            alt="Logo Kinshasa"
            width={60}
            height={40}
            className=""
          />
          <div>
            <nav className="flex gap-8 uppercase font-PMedium">
              <Link href="#Accueil" className="nav-element">
                Kin Gouv
              </Link>
              <Link href="#Gouv" className="nav-element">
                Le Gouverneur
              </Link>
              <Link href="#HowItWork" className="nav-element">
                Comment ça marche
              </Link>
              <Link href="#Accueil" className="nav-element">
                Votre avis compte
              </Link>
              <Link href="#Accueil" className="nav-element">
                Autres avis
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex items-center">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="flex w-1/2 flex-col gap-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className=" space-y-7">
                <h1 className=" font-PExtra text-6xl text-bleu">
                  {slide.title}
                </h1>
                <p className=" font-PBold text-4xl text-primary">
                  {slide.underTitle}
                </p>
                <p className=" text-grayHard font-PLight mr-20">
                  {slide.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-[28rem] bg-white w-1/2 shadow-2xl p-4 rounded-2xl relative space-y-2"
          >
            {gouvImages.map((slideImage, index) => (
              <SwiperSlide key={index} className=" space-y-7 rounded-xl">
                <Image
                  src={slideImage.src}
                  alt={slideImage.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    padding: 14,
                    borderRadius: 24,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
