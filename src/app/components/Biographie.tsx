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
import { gouvImagesBiographie } from "./data";

export default function Biographie() {
  return (
    <section>
      <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg bg-grayLight2 rounded-xl py-14 mb-10 pr-8">
        <div className="  flex items-center pl-10">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="w-1/2 p-5"
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

          <div className="w-1/2 bg-orangee">
            <div className=" space-y-2 mb-4">
              <h2 className={`${BlackFont.className} text-bleu text-4xl`}>
                Diyabanza Mwananene
              </h2>
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
              className={`${LightFont.className} text-text text-justify leading-4 swiperCard`}
            >
              <SwiperSlide className="swiperSlide">
                <p className="leading-5 pr-4 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  luctus, ex eu sagittis faucibus, ligula ipsum sagittis magna,
                  et imperdiet dolor lectus eu libero. Vestibulum venenatis eget
                  turpis sed faucibus. Maecenas in ullamcorper orci, eu
                  ullamcorper sem.
                </p>{" "}
                <br />
                <p className="leading-5 pr-4 text-sm">
                  Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna
                  consectetur convallis non vel mi. Donec libero dolor, volutpat
                  ut urna sit amet, aliquet molestie purus.
                </p>{" "}
                <br />
                <p className="leading-5 pr-4 text-sm">
                  Curabitur eget aliquam erat. Curabitur a neque vitae purus
                  volutpat elementum. Vivamus quis vestibulum leo, efficitur
                  ullamcorper velit. Integer tincidunt finibus metus vel porta.
                  Mauris sed mauris congue, pretium est nec, malesuada purus.
                  Nulla hendrerit consectetur arcu et lacinia.
                </p>{" "}
                <br />
                <p className="leading-5 pr-4 text-sm">
                  Curabitur sed sodales leo. Nulla facilisi. Etiam condimentum,
                  nisi id tempor vulputate, nisi justo cursus justo,
                  pellentesque condimentum diam arcu sit amet leo. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. In placerat tellus a posuere vehicula. Donec
                  diam massa, efficitur vitae mattis et, pretium in augue. Fusce
                  iaculis mi quis ante venenatis, sit amet pellentesque orci
                  aliquam. Vestibulum elementum posuere vehicula.
                </p>{" "}
                <br />
                <p className="leading-5 pr-4 text-sm">
                  Sed tincidunt diam a massa pharetra faucibus. Praesent
                  condimentum id arcu nec fringilla. Maecenas faucibus, ante et
                  venenatis interdum, erat mi eleifend dui, at convallis nisl
                  est nec arcu. Duis vitae arcu rhoncus, faucibus magna ut,
                  tempus metus. Cras in nibh sed ipsum consequat rhoncus. Proin
                  fringilla nulla ut augue tempor fermentum. Nunc hendrerit non
                  nisi vitae finibus. Donec eget ornare libero. Aliquam auctor
                  erat enim, a semper risus semper at. In ut dui in metus
                  tincidunt euismod eget et lacus. Aenean et dictum urna, sed
                  rhoncus lorem. Duis pharetra sagittis odio. Etiam a libero ut
                  nisi feugiat tincidunt vel vitae turpis. Maecenas vel orci sit
                  amet lorem hendrerit venenatis sollicitudin ut dui. Quisque
                  rhoncus nibh in massa pretium scelerisque.
                </p>{" "}
                <br />
                <p className="leading-5 pr-4 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  luctus, ex eu sagittis faucibus, ligula ipsum sagittis magna,
                  et imperdiet dolor lectus eu libero. Vestibulum venenatis eget
                  turpis sed faucibus. Maecenas in ullamcorper orci, eu
                  ullamcorper sem. Etiam elit ante, luctus non ante sit amet,
                  sodales vulputate odio. Aenean tristique nisl tellus, sit amet
                  fringilla nisl volutpat cursus. Quisque dignissim lectus ac
                  nunc consectetur mattis. Proin vel hendrerit ipsum, et
                  lobortis dolor. Vestibulum convallis, nibh et tincidunt
                  tristique, nisl risus facilisis lectus, ut interdum orci nisl
                  ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                  sodales posuere eget non est. Fusce convallis vestibulum dolor
                  non volutpat. Vivamus vestibulum quam ut ultricies pretium.
                </p>{" "}
                <br />
                <p className="leading-5 pr-4 text-sm">
                  Sed tincidunt diam a massa pharetra faucibus. Praesent
                  condimentum id arcu nec fringilla. Maecenas faucibus, ante et
                  venenatis interdum, erat mi eleifend dui, at convallis nisl
                  est nec arcu. Duis vitae arcu rhoncus, faucibus magna ut,
                  tempus metus. Cras in nibh sed ipsum consequat rhoncus. Proin
                  fringilla nulla ut augue tempor fermentum. Nunc hendrerit non
                  nisi vitae finibus. Donec eget ornare libero. Aliquam auctor
                  erat enim, a semper risus semper at. In ut dui in metus
                  tincidunt euismod eget et lacus. Aenean et dictum urna, sed
                  rhoncus lorem. Duis pharetra sagittis odio. Etiam a libero ut
                  nisi feugiat tincidunt vel vitae turpis. Maecenas vel orci sit
                  amet lorem hendrerit venenatis sollicitudin ut dui. Quisque
                  rhoncus nibh in massa pretium scelerisque.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="bg-[#f6feff] py-14 mb-10 pr-8">
        <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg grid grid-cols-3 gap-8">
          <div className=" space-y-2">
            <div className="flex items-center gap-5">
              <div className="bg-[#fcdded] w-11 h-11 rounded-full flex justify-center items-center">
                <MdLightMode className="text-[#d44a88] h-7 w-7" />
              </div>
              <h3 className={`${BoldFont.className} text-text text-lg`}>
                Qualité du gouverneur 1
              </h3>
            </div>
            <p
              className={`${LightFont.className} text-sm text-grayHard text-justify`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sunt
              omnis est modi at officiis illum. Aut minima veritatis
              reprehenderit debitis perferendis non quos dolor modi, labore
              ipsam dolorem ea!
            </p>
          </div>
          <div className=" space-y-2">
            <div className="flex items-center gap-5">
              <div className="bg-[#f8eee2] w-11 h-11 rounded-full flex justify-center items-center">
                <MdLightMode className="text-[#ffa95e] h-7 w-7" />
              </div>
              <h3 className={`${BoldFont.className} text-text text-lg`}>
                Qualité du gouverneur 2
              </h3>
            </div>
            <p
              className={`${LightFont.className} text-sm text-grayHard text-justify`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sunt
              omnis est modi at officiis illum. Aut minima veritatis
              reprehenderit debitis perferendis non quos dolor modi, labore
              ipsam dolorem ea!
            </p>
          </div>
          <div className=" space-y-2">
            <div className="flex items-center gap-5">
              <div className="bg-[#d0cfe9] w-11 h-11 rounded-full flex justify-center items-center">
                <MdLightMode className="text-[#050066] h-7 w-7" />
              </div>
              <h3 className={`${BoldFont.className} text-text text-lg`}>
                Qualité du gouverneur 3
              </h3>
            </div>
            <p
              className={`${LightFont.className} text-sm text-grayHard text-justify`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sunt
              omnis est modi at officiis illum. Aut minima veritatis
              reprehenderit debitis perferendis non quos dolor modi, labore
              ipsam dolorem ea!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
