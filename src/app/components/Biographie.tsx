"use client";
import React from "react";
import { BlackFont, BoldFont, LightFont, MediumFont } from "../config/fonts";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import {
  FreeMode,
  Scrollbar,
  Mousewheel,
  Autoplay,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./biographie.css";
import { MdLightMode } from "react-icons/md";
import { gouvImagesBiographie, gouvQualities } from "./data";
import { RiLightbulbFlashFill } from "react-icons/ri";

export default function Biographie() {
  return (
    <section id="Gouv" className=" mt-12 md:mt-6">
      <div className="md:mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg lg:bg-grayLight2 rounded-xl mb-6 lg:pr-8">
        <div className="flex flex-col-reverse items-center lg:flex lg:flex-row lg:items-center lg:py-14 lg:pl-10 gap-5 lg:gap-0">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="w-full md:w-1/2 md:p-5"
          >
            {gouvImagesBiographie.map((slideImage, index) => (
              <SwiperSlide key={index} className=" space-y-7 rounded-xl">
                <Image
                  src={slideImage.src}
                  alt={slideImage.alt}
                  width={400}
                  height={400}
                  priority
                  className="rounded-xl shadow-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="sm:w-3/4 lg:w-1/2">
            <div className="text-center sm lg:space-y-2 lg:mb-4 lg:text-left">
              <div className="flex flex-col mb-4 lg:flex lg:flex-row lg:gap-4">
                <h2 className={`${BlackFont.className} text-bleu text-4xl`}>
                  Diyabanza
                </h2>
                <h2 className={`${BlackFont.className} text-bleu text-4xl`}>
                  Mwananene
                </h2>
              </div>
              <h3 className={`${MediumFont.className} text-primary text-base`}>
                Biographie, qui est-il ?
              </h3>
            </div>

            <Swiper
              direction={"vertical"}
              slidesPerView={"auto"}
              freeMode={true}
              scrollbar={true}
              mousewheel={true}
              modules={[FreeMode, Scrollbar, Mousewheel]}
              className={`${LightFont.className} text-text text-justify leading-4 swiperCard mt-4`}
            >
              <SwiperSlide className="swiperSlide px-7 shadow-inner pt-4 ">
                <p className="leading-5 text-sm">
                  Homme Politique, Secrétaire National Honoraire de
                  l&apos;UDPS/TSHISEKEDI | Marié et Père de famille |
                </p>{" "}
                <br />
                <div className="flex flex-col mb-4 lg:flex lg:flex-row lg:gap-3">
                  <p
                    className={`${BoldFont.className} text-bleu text-center md:text-left leading-5 text-base`}
                  >
                    DÉPUTÉ PROVINCIAL 2024
                  </p>
                  <p
                    className={`${BoldFont.className} text-bleu text-center md:text-left leading-5 text-base`}
                  >
                    CIRCONSCRIPTION DE MATETE
                  </p>
                </div>
                <br />
                <p className="leading-5 text-sm">
                  Il a une clarté d&apos;esprit pour identifier les défis et les
                  opportunités à venir, ainsi que pour définir une direction
                  ambitieuse pour le développement de sa région.
                </p>{" "}
                <br />
                <p className="leading-5 text-sm">
                  Il est capable d&apos;analyser de manière critique les
                  problèmes complexes et de formuler des stratégies efficaces
                  pour les résoudre. Il est capable d&apos;analyser de manière
                  critique les problèmes complexes et de formuler des stratégies
                  efficaces pour les résoudre.
                </p>{" "}
                <br />
                <p className="leading-5 text-sm">
                  Il sait faire preuve de flexibilité et d&apos;adaptabilité
                  face aux changements imprévus, tout en gardant toujours à
                  l&apos;esprit les objectifs à atteindre.
                </p>{" "}
                <br />
                <p className="leading-5 text-sm">
                  Son approche pratique et terre-à-terre lui permet de trouver
                  des solutions concrètes aux défis quotidiens auxquels sa
                  région est confrontée, améliorant ainsi la vie quotidienne
                  de ses citoyens.
                </p>{" "}
                <br />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="bg-[#f6feff] md:py-14 mb-10 md:px-8 lg:px-0 lg:pr-8">
        <div className="lg:mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:grid-cols-2 lg:grid-cols-4 grid  p-6 gap-8">
          {gouvQualities.map((quality, index) => (
            <div className=" space-y-2" key={index}>
              <div className="flex items-center gap-5">
                <div className="bg-[#fcd1d2] w-11 h-11 rounded-full flex justify-center items-center">
                  <RiLightbulbFlashFill className="text-[#a60004] h-7 w-7`" />
                </div>
                <h3 className={`${BoldFont.className} text-text text-lg`}>
                  {quality.title}
                </h3>
              </div>
              <p
                className={`${LightFont.className} text-sm text-grayHard text-justify`}
              >
                {quality.descriprion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
