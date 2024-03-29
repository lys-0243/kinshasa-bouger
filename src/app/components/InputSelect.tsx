import React from "react";
import { communes } from "./data";

export default function InputSelect() {
  return (
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
  );
}
