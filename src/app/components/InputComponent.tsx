import React from "react";
import { LightFont, MediumFont } from "../config/fonts";

export type InputComponentProps = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
};
export default function InputComponent({
  label,
  type,
  name,
  placeholder,
}: InputComponentProps) {
  return (
    <div>
      <label
        className={`${MediumFont.className} block text-sm leading-6 text-text`}
      >
        {label} <span className=" text-primary">*</span>
      </label>
      <div>
        <input
          type={type}
          name={name}
          required
          placeholder={placeholder}
          className={`block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight ${LightFont.className} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        />
      </div>
    </div>
  );
}
