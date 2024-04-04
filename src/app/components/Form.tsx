import React, { useEffect, useState } from "react";
import { BoldFont, LightFont, MediumFont } from "../config/fonts";
import { IoIosSend } from "react-icons/io";
import { communes } from "./data";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { RiLoader2Line } from "react-icons/ri";

export default function CustomForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [dataComment, setDataComment] = useState({
    pseudo: "",
    commune: "",
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (event: any) => {
    let value = event.target.value;
    const field = event.target.name;

    setDataComment({
      ...dataComment,
      [field]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (dataComment.commune === "Selectionnez votre commune") {
      toast.error("Veuillez selectionner votre commune");
    } else {
      try {
        setLoading(true);
        const response = await fetch(`/api/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataComment),
        });
        const data = await response.json();
        if (response.ok) {
          toast.success("Merci d'avoir participé");
          setDataComment({
            pseudo: "",
            commune: "Selectionnez votre commune",
            prenom: "",
            nom: "",
            email: "",
            telephone: "",
            message: "",
          });
          router.replace("/");
          setLoading(false);
        } else {
          toast.error("Une erreur est survenue, merci de ressayer");
        }
      } catch (error) {
        setLoading(false);
        toast.error("Une erreur est survenue, merci de ressayer");
        console.log({ error });
      }
    }
  };

  return (
    <div className="isolate ">
      <form className="" onSubmit={handleSubmit}>
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
                onChange={handleChange}
                value={dataComment.pseudo}
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
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight focus:ring-2 focus:ring-inset focus:ring-text sm:text-sm sm:leading-6"
              >
                <option value="" className="text-grayLight" selected disabled>
                  Selectionnez votre commune
                </option>
                {communes.map((commune) => (
                  <option value={commune.title} key={commune.title}>
                    {commune.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-span-2">
            <div className=" h-[1px] bg-primary bg-opacity-10 mt-3 mb-3"></div>

            <p className={`${LightFont.className} italic text-text text-sm`}>
              Les informations relevant à votre identité sont gardées dans la
              stricte mesure de vous contacter si votre avis suscite de
              l&apos;intérêt{" "}
            </p>
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 ">
              <div>
                <label
                  className={`${MediumFont.className} block text-sm leading-6 text-text`}
                >
                  Prénom <span className=" text-primary">*</span>
                </label>
                <div>
                  <input
                    type={"text"}
                    name={"prenom"}
                    required
                    onChange={handleChange}
                    value={dataComment.prenom}
                    placeholder={"Sylvain"}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight ${LightFont.className} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`${MediumFont.className} block text-sm leading-6 text-text`}
                >
                  Nom <span className=" text-primary">*</span>
                </label>
                <div>
                  <input
                    type={"text"}
                    name={"nom"}
                    required
                    onChange={handleChange}
                    value={dataComment.nom}
                    placeholder={"Tshiasuma"}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight ${LightFont.className} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`${MediumFont.className} block text-sm leading-6 text-text`}
                >
                  Email
                </label>
                <div>
                  <input
                    type={"email"}
                    name={"email"}
                    value={dataComment.email}
                    onChange={handleChange}
                    placeholder={"user@domain.com (Faculattif)"}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight ${LightFont.className} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`${MediumFont.className} block text-sm leading-6 text-text`}
                >
                  Téléphone <span className=" text-primary">*</span>
                </label>
                <div>
                  <input
                    type={"tel"}
                    name={"telephone"}
                    required
                    onChange={handleChange}
                    placeholder={"+243 894 XXX XXX"}
                    value={dataComment.telephone}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight ${LightFont.className} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>
            </div>

            <div className=" h-[1px] bg-primary bg-opacity-10  mt-6"></div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-text">
              Votre avis compte <span className=" text-primary">*</span>
            </label>
            <div>
              <textarea
                name="message"
                required
                rows={4}
                onChange={handleChange}
                value={dataComment.message}
                placeholder="Saisissez votre avis ici"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight focus:ring-2 focus:ring-inset focus:ring-text sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={loading}
            className={
              loading
                ? `w-full rounded-md bg-grayLight px-3.5 py-2.5 text-center cursor-not-allowed text-sm ${BoldFont.className} text-white shadow-sm  flex items-center gap-4 justify-center`
                : `w-full rounded-md bg-bleu px-3.5 py-2.5 text-center text-sm ${BoldFont.className} text-white shadow-sm hover:bg-bleulight transition duration-200 flex items-center gap-4 justify-center`
            }
          >
            {loading ? (
              <RiLoader2Line className="animate-spin text-bleu h-6 w-6" />
            ) : (
              <>
                Envoyer
                <IoIosSend className="h-7 w-7" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
