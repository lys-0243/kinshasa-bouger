import React from "react";
import { BoldFont, LightFont, MediumFont } from "../config/fonts";
import { IoIosSend } from "react-icons/io";
import InputComponent from "./InputComponent";
import { InputLargeComponent } from "./InputLarge";

export default function CustomForm() {
  return (
    <div className="isolate ">
      <form className="">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <InputLargeComponent
            label="Pseudo"
            type="text"
            name="telephone"
            placeholder="@fakal45"
          />

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
              />
              <InputComponent
                label="Nom"
                type="text"
                name="nom"
                placeholder="Tshiasuma"
              />
              <InputComponent
                label="Email"
                type="email"
                name="email"
                placeholder="user@domain.com"
              />
              <InputComponent
                label="Téléphone"
                type="tel"
                name="telephone"
                placeholder="+243 894 XXX XXX"
              />
            </div>

            <div className=" h-[1px] bg-primary bg-opacity-10  mt-6"></div>
          </div>

          <InputLargeComponent
            label="Votre avis"
            type="textarea"
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
