import React from "react";
import { BoldFont, LightFont, MediumFont } from "../config/fonts";
import { IoIosSend } from "react-icons/io";
import InputComponent from "./InputComponent";
import InputSelect from "./InputSelect";
import { communes } from "./data";

export default function CustomForm() {
  return (
    <div className="isolate ">
      <form className="">
        <div className="flex flex-col gap-3">
          <div>
            <label
              className={`${MediumFont.className} block text-sm leading-6 text-text`}
            >
              Pseudo <span className=" text-primary">*</span>
            </label>
            <div>
              <input
                type={"text"}
                name={"pseudo"}
                required
                placeholder={"ex: @fakal45"}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight ${LightFont.className} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-text">
              Commune <span className=" text-primary">*</span>
            </label>
            <div>
              <select
                name="commune"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight focus:ring-2 focus:ring-inset focus:ring-text sm:text-sm sm:leading-6"
              >
                <option value="" className="text-grayLight">
                  Selectionnez votre commune
                </option>
                {communes.map((commune) => (
                  <option value={commune.title}>{commune.title}</option>
                ))}
              </select>
            </div>
          </div>

          <InputSelect />

          <div className="col-span-2">
            <div className=" h-[1px] bg-primary bg-opacity-10 mt-3 mb-3"></div>

            <p className={`${LightFont.className} italic text-text text-sm`}>
              Les informations relevant à votre identité sont gardées dans la
              stricte mesure de vous contacter si votre avis suscite de
              l&apos;intérêt{" "}
            </p>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 ">
              <InputComponent
                label="Prénom"
                type="text"
                name="prenom"
                placeholder="Sylvain"
                require
              />
              <InputComponent
                label="Nom"
                require
                type="text"
                name="nom"
                placeholder="Tshiasuma"
              />
              <InputComponent
                label="Email"
                type="email"
                name="email"
                require={false}
                placeholder="user@domain.com (Faculattif)"
              />
              <InputComponent
                label="Téléphone"
                type="tel"
                name="telephone"
                placeholder="+243 894 XXX XXX"
                require
              />
            </div>

            <div className=" h-[1px] bg-primary bg-opacity-10  mt-6"></div>
          </div>

          <InputComponent
            label="Votre avis"
            type="textarea"
            require
            name="textarea"
            placeholder="Saisissez votre avis ici"
          />
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className={`w-full rounded-md bg-bleu px-3.5 py-2.5 text-center text-sm ${BoldFont.className} text-white shadow-sm hover:bg-bleulight transition duration-200 flex items-center gap-4 justify-center`}
          >
            Envoyer
            <IoIosSend className="h-7 w-7" />
          </button>
        </div>
      </form>
    </div>
  );
}
