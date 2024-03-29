"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { BoldFont, ExtraFont, LightFont, MediumFont } from "../config/fonts";
import { gouvImages, slides } from "./data";

export default function HeroSection() {
  return (
    <section
      className="bg-[url('/img/hero-bg-optimizer.png')] bg-cover bg-no-repeat h-screen"
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
            <nav className={`${MediumFont.className} flex gap-8 uppercase`}>
              <Link href="#Accueil" className="nav-element">
                Kin Gouv
              </Link>
              <Link href="#Gouv" className="nav-element">
                Le Gouverneur
              </Link>
              <Link href="#HowItWork" className="nav-element">
                Comment ça marche
              </Link>
              <Link href="#DonnerSonAvis" className="nav-element">
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
            modules={[Autoplay, Pagination]}
            className="flex w-1/2 flex-col gap-10 relative"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className=" space-y-7">
                <h1 className={`${ExtraFont.className} text-6xl text-bleu`}>
                  {slide.title}
                </h1>
                <p className={`${BoldFont.className} text-4xl text-primary`}>
                  {slide.underTitle}
                </p>
                <p className={` text-grayHard ${LightFont.className} mr-20`}>
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
                  quality={100}
                  priority
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
