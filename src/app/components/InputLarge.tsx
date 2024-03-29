import { InputComponentProps } from "./InputComponent";

export function InputLargeComponent({
  label,
  type,
  name,
  placeholder,
}: InputComponentProps) {
  return (
    <div className="sm:col-span-2">
      <label className="block text-sm font-semibold leading-6 text-text">
        {label} <span className=" text-primary">*</span>
      </label>
      <div>
        {type == "textarea" ? (
          <textarea
            name="avis"
            rows={4}
            required
            placeholder={placeholder}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-grayLight focus:ring-2 focus:ring-inset focus:ring-text sm:text-sm sm:leading-6"
          />
        )}
      </div>
    </div>
  );
}
